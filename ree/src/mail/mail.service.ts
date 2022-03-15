import { Injectable, Logger } from '@nestjs/common';
import { Mail, GetEmailRequest, GetMailResponse,SetEmailRequest, SetMailResponse } from 'protocols/email';
import { createClient } from 'redis'
@Injectable()
export class MailService {
    public static RedisKeys = {
        R_Hash_EMAIL: 'mail'
    };
    private readonly logger = new Logger("MailService");
    private readonly client = createClient();
    constructor(){}

    async getMail(req:GetEmailRequest): Promise<GetMailResponse> {
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
                    req.emailId.toString()
                ))
            );
        } catch (err) {
            this.logger.log('get Mail Redis error',err);
            ret.mail = null;
            ret.statusCode = 0x4 // redis error;
            ret.status = "redis error";
            return ret;
        }
        return ret;
    }

    async setMail(req:SetEmailRequest): Promise<SetMailResponse> {
        this.logger.debug("setMail");
        let ret = new SetMailResponse;
        //this.client.
        return null;
    }
    async delMail(req:GetEmailRequest): Promise<any> {
        this.logger.debug("modifyMail");
    }
    async addMail(req:GetEmailRequest): Promise<any> {
        this.logger.debug("addMail");
    }

}
