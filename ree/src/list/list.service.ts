import { Injectable } from '@nestjs/common';
import Heap from 'heap';
import { async } from 'rxjs';
import { Item } from 'src/protocol/item.interface';
import { List } from 'src/protocol/list.interface';

@Injectable()
export class ListService implements List{
    constructor(){
        this.list = new Heap<Item>((a:Item,b:Item)=> a.timeStamp - b.timeStamp);
    }
    private list: Heap<Item>;
    private static cmp(a:Item,b:Item):number{
        return a.nxtNotify-b.timeStamp;
    }
    public async updateTop(): Promise<any>{
        let top: Item = this.list.pop();
        top.period.splice(0,1);
        if (top.period.length != 0){
            top.nxtNotify = top.timeStamp + top.period[0]
            this.list.push(top);
        }
    }

    
    getSeveralItem(num: number): Item[] {
        return Heap.nlargest<Item>(this.list.toArray(),num,ListService.cmp);
    }
}
