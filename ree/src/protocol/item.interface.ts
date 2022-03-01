export interface Item {
    key: string;
    value: string;
    timeStamp: number;
    nxtNotify: number;
    period: number[]; // time interval to recite, calculate from timeStamp;
}
