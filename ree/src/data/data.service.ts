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
    constructor(private configService:ConfigService){
        const config = this.configService.getConfig();
        const x = mariadb.createConnection({
            host: config.database.host,
            port: config.database.port,
            user: config.database.user,
            password: config.database.password
        });
        x.then((conn)=>this.logger.log(conn.serverVersion())).catch((reason)=>Logger.error(reason));

        
    }
    public addDBIfUnexist(){

    }

    public checkDBavaliable(){

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
