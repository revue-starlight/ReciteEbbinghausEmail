import { Injectable, Logger } from '@nestjs/common';
import { getDBRequest, getRedisRequest } from 'protocols/data';
import { ConfigService } from 'src/config/config.service';
import * as mariadb from "mariadb";
/**
 * 进行数据库与缓存一致性
 * 向其他服务提供数据库/缓存服务
 */
@Injectable()
export class DataService {
    
    private readonly logger = new Logger("dataService");
    private readonly conn;
    constructor(private configService:ConfigService){
        const config = this.configService.getConfig();
        this.conn = mariadb.createConnection({
            host: config.database.host,
            port: config.database.port,
            user: config.database.user,
            password: config.database.password
        });
        this.conn.then((conn)=>this.logger.log(conn.serverVersion())).catch((reason)=>Logger.error(reason));

        
    }
    public addDBIfUnexist(){

    }

    /**
     * 为什么不用 option<T> 呢? 这只是一个玩具
     * @returns 1 for avaliable 0 for unavaliable
     */
    public checkDBavaliable(): number{
        // if database exist
        

        return 1;
    }

    public addBasicDB(){

    }
    public check
    public async dbOp(redisReq: getRedisRequest,dbReq:getDBRequest): Promise<string>{
        let res = await (redisReq.method.call(redisReq.obj,redisReq.arg));
        if (res == null){
            res = (await dbReq.method.call(dbReq.obj,dbReq.arg));
        }
        return res;
    }
}
