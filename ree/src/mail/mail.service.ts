import { Injectable, Logger } from '@nestjs/common';
import { GetMailRequest, GetMailResponse,SetMailRequest, SetMailResponse, MailStatus, DelMailRequest, DelMailResponse, AddMailRequest, AddMailResponse, Mail } from 'protocols/email';
import { createClient } from 'redis'
@Injectable()
export class MailService {
    public static RedisKeys = {
        R_Hash_EMAIL: 'mail',
        R_EMAIL_SUM_COUNT: 'mail_s'
    };
    private readonly logger = new Logger("MailService");
    private readonly client = createClient();
    constructor(){}

    private async getId():Promise <number> {
        if (MailService.idAble == 1)
            this.client.INCR(MailService.RedisKeys.R_EMAIL_SUM_COUNT);
        else {
            // FIXME when database is added
            this.client.setNX(MailService.RedisKeys.R_EMAIL_SUM_COUNT,'0');
            MailService.idAble = 1;
        }
        return 1;
    }
    async getMail(req:GetMailRequest): Promise<GetMailResponse> {
        let id = req.mailId;
        let ret : GetMailResponse = {
            statusCode: 0x0,
            status: '',
            mail: null
        };
        this.logger.debug("getMail");
        try {
            ret.mail = JSON.parse(
                (await this.client
                .hGet(MailService.RedisKeys.R_Hash_EMAIL,
                    id.toString()
                ))
            );
        } catch (err) {
            this.logger.log('get Mail Redis error',err);
            ret.mail = null;
            ret.statusCode = MailStatus.RedisError; // redis error;
            ret.status = "redis error";
            return ret;
        }
        return ret;
    }

    async setMail(req:SetMailRequest): Promise<SetMailResponse> {
        this.logger.debug("setMail");
        let id = req.mailId;
        let mail = req.mail;
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
    async addMail(req:AddMailRequest): Promise<AddMailResponse> {

        this.logger.debug("addMail");
        let ret = new AddMailResponse;
        ret.statusCode = MailStatus.Success;
        try {
            await this.client.hSetNX(MailService.RedisKeys.R_Hash_EMAIL,);
            let id = await this.client.HLEN(MailService.RedisKeys.R_Hash_EMAIL);
            id++;
            this.client.hSet(MailService.RedisKeys.R_Hash_EMAIL,
                id.toString());
        }
        return ret;
    }

}
