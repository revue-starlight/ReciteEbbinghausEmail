import { Injectable } from '@nestjs/common';
import { ListService } from 'src/list/list.service';
import { MailService } from 'src/mail/mail.service';
import { Item } from 'src/protocol/item.interface';
import { Mail } from 'src/protocol/mail.interface'
@Injectable()
export class NotifierService {
    constructor(private mailService:MailService,private listService:ListService){}

    async notifyItem(item:Item): Promise<any> {
        while(1){
            setInterval(function notify() {
                this.mailService.sendAllMail();
                
            },getms());
            
        }
    }
}
