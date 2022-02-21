import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PqService } from './pq/pq.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PqService],
})
export class AppModule {}
