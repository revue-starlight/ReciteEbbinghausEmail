import Heap from "heap";
import { Item } from "./item.interface";

export interface List {
    list: Heap<Item>;
    getSeveralItem(num:Number):Item[];
}