import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { ListService } from './list/list.service';
import { NotifierService } from './notifier/notifier.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, NotifierService, ListService, MailService],
})
export class AppModule {}
