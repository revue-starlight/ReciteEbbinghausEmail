export interface getRequest{
    obj:Object,
    method: Function,
    arg: [],
}

export class getRedisRequest implements getRequest{
    obj: Object;
    method: Function;
    arg;
}

export class getDBRequest implements getRequest {
    obj: Object;
    method: Function;
    arg;
}
