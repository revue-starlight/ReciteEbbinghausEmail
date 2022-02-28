export interface Item {
    key: string;
    value: string;
    timeStamp: number;
    period: number[]; // time interval to recite, calculate from timeStamp;
}
