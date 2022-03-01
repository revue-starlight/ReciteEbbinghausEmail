import { Injectable } from '@nestjs/common';
import { Mail } from 'src/protocol/mail.interface';

@Injectable()
export class MailService{
    _mailList:Mail[];
    
    async sendAllMail(){
        console.log("fix me");
    }
    async sendMail(mail:Mail){
        console.log("send mail~");
    }
    async addMail(mail:Mail){
        this._mailList.push(mail);
    }
    async delMail(mail:Mail):Promise<any>{
        let index: number | undefined;
        if ((index = this._mailList.indexOf(mail)) == -1){
            throw new Error("can't find existing mail");
        } else {
            try {
                this._mailList.splice(index,1);
            } catch (error){
                console.log(error);
            }
        }
    }
    get mailList(){
        return this._mailList;
    }
}
