import { Injectable } from '@nestjs/common';
import Heap from 'heap';
import { Item } from 'src/protocol/item.interface';
import { List } from 'src/protocol/list.interface';

@Injectable()
export class ListService implements List{
    constructor(){
        this.list = new Heap<Item>((a:Item,b:Item)=> a.timeStamp - b.timeStamp);
    }
    list: Heap<Item>;
    getSeveralItem(num: Number): Item[] {
        throw new Error('Method not implemented.');
    }
    
}
