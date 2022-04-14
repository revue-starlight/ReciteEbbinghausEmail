import { Injectable, Logger } from '@nestjs/common';
import { getDBRequest, getRedisRequest } from 'protocols/data';

/**
 * 进行数据库与缓存一致性
 * 向其他服务提供数据库/缓存服务
 */
@Injectable()
export class DataService {
    

    public async dbOp(redisReq: getRedisRequest,dbReq:getDBRequest): Promise<string>{
        let res = await (redisReq.method.call(redisReq.obj,redisReq.arg));
        if (res == null){
            res = (await dbReq.method.call(dbReq.obj,dbReq.arg));
        }
        return res;
    }
}
