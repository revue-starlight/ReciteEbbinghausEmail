import { Item } from "./item.interface";

export interface List {
    getSeveralItem(num:Number):Item[];
    updateTop():Promise<any>;

}