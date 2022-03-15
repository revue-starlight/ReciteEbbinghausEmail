import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { AddMailResponse, DelMailResponse, GetMailResponse, SetMailResponse } from 'protocols/email';
import { AddEmailRequestDto, DeleteEmailRequestDto, ModifyEmailRequestDto } from './mail.dto';
@Controller('mail')
export class MailController {
    private readonly logger = new Logger("MailController");
    @Get(':id')
    async getMailReq(@Param('id') id:string):Promise<GetMailResponse>{
        this.logger.log("get req");this.logger.log(id);
        //FIXME
        return null;
    }

    @Post('modify')
    async modifyMailReq(@Body() req:ModifyEmailRequestDto):Promise<SetMailResponse>{
        this.logger.log("modify req");this.logger.log(req);
        // Fixme
        return null;
    }

    @Post('delete')
    async deleteMailReq(@Body() req:DeleteEmailRequestDto):Promise<DelMailResponse>{
        this.logger.log("del req");this.logger.log(req);
        // Fixme
        return null;
    }

    @Post('add')
    async addMailReq(@Body() req:AddEmailRequestDto):Promise<AddMailResponse>{
        // Fixme
        return null;
    }

}
