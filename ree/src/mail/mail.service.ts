import { Injectable, Logger } from '@nestjs/common';
import { Snowflake } from 'nodejs-snowflake';
import { getRedisRequest } from 'protocols/data';
import { GetMailRequest, GetMailResponse,SetMailRequest, SetMailResponse, MailStatus, DelMailRequest, DelMailResponse, AddMailRequest, AddMailResponse, Mail } from 'protocols/email';
import { createClient } from 'redis'
import { DataService } from 'src/data/data.service';
import * as mariadb from 'mariadb'
import { ConfigService } from 'src/config/config.service';
import { isEmail } from 'class-validator';
@Injectable()
export class MailService {
    public static RedisKeys = {
        R_Hash_EMAIL: 'mail',
        R_EMAIL_SUM_COUNT: 'mail_s'
    };
    private readonly logger = new Logger("MailService");
    private readonly client = createClient();

    constructor(private readonly dataService:DataService,
                private readonly configService:ConfigService){

        
    }

    /**
     * use snowflake to generate ID
     * @returns number: Id
     */
    private async getId():Promise <string> {
        const id = new Snowflake().getUniqueID().toString();
        return id;
    }
    async getMail(req:GetMailRequest): Promise<GetMailResponse> {
        const id = req.mailId;
        let ret : GetMailResponse = {
            statusCode: 0x0,
            status: '',
            mail: null
        };
        this.logger.debug("getMail");
        const redisReq : getRedisRequest = {
            obj: this.client,
            method: this.client.hSet,
            arg: [
                MailService.RedisKeys.R_Hash_EMAIL,
                id
            ]
        }
        this.dataService.dbOp(redisReq,null);
        // try {
        //     ret.mail = JSON.parse(
        //         (await this.client
        //         .hGet(MailService.RedisKeys.R_Hash_EMAIL,
        //             id
        //         ))
        //     );
        // } catch (err) {
        //     this.logger.log('get Mail Redis error',err);
        //     ret.mail = null;
        //     ret.statusCode = MailStatus.RedisError; // redis error;
        //     ret.status = "redis error";
        //     return ret;
        // }
        // return ret;

        return null;
    }

    async setMail(req:SetMailRequest): Promise<SetMailResponse> {
        this.logger.debug("setMail");
        const id = req.mailId;
        const mail = req.mail;
        let ret = new SetMailResponse;
        ret.statusCode = MailStatus.Success;
        try {
            await this.client.hSet(MailService.RedisKeys.R_Hash_EMAIL,
                id.toString(),
                JSON.stringify(mail));
        } catch (err) {
            this.logger.log("setMail error:",err);
            ret.status = err;
            ret.statusCode = MailStatus.RedisError;
        }
        return ret;
    }
    async delMail(req:DelMailRequest): Promise<DelMailResponse> {
        this.logger.debug("delMail");
        let ret = new SetMailResponse;
        ret.statusCode = MailStatus.Success;
        let id = req.mailId;
        try {
            await this.client.hDel(MailService.RedisKeys.R_Hash_EMAIL,
                id.toString());
        } catch (err) {
            this.logger.log("delMail error:",err);
            ret.statusCode = MailStatus.RedisError;
            return ret;
        }
        return ret;
        
    }
    // async addMail(req:AddMailRequest): Promise<AddMailResponse> {
    //     this.logger.debug("addMail");
    //     let ret = new AddMailResponse;
    //     ret.statusCode = MailStatus.Success;
    //     try {
    //         let id = await this.client.HLEN(MailService.RedisKeys.R_Hash_EMAIL);
    //         id++;
    //         this.client.hSet(MailService.RedisKeys.R_Hash_EMAIL,
    //             id,);
    //     }
    //     return ret;
    // }

    
    async testFunction(req: AddMailRequest):Promise<AddMailResponse> {
        const id = await this.getId();
        await this.client.hSet(MailService.RedisKeys.R_Hash_EMAIL,id,JSON.stringify(req));
        const redisReq: getRedisRequest = {
            obj: this.client,
            method: this.client.hSet,
            arg: [MailService.RedisKeys.R_Hash_EMAIL,id,JSON.stringify(req)],
        };
        //this.dataService.get(redisReq,null);
        return null;
    }
}
