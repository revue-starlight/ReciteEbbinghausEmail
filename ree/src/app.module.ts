import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PqService } from './pq/pq.service';
import { NotifierService } from './notifier/notifier.service';
import { ItemService } from './item/item.service';
import { ListService } from './list/list.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PqService, NotifierService, ItemService, ListService],
})
export class AppModule {}
