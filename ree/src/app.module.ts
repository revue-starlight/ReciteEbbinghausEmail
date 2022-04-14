import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailController } from './mail/mail.controller';
import { MailService } from './mail/mail.service';
import { DataService } from './data/data.service';
import { ConfigService } from './config/config.service';

@Module({
  imports: [],
  controllers: [AppController, MailController],
  providers: [AppService, MailService, DataService, ConfigService],
})
export class AppModule {}
