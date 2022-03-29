import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailController } from './mail/mail.controller';
import { MailService } from './mail/mail.service';
import { DataService } from './data/data.service';

@Module({
  imports: [],
  controllers: [AppController, MailController],
  providers: [AppService, MailService, DataService],
})
export class AppModule {}
