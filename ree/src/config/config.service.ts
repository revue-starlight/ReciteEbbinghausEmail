import { Injectable,Logger } from '@nestjs/common';
import * as toml from "toml"
import { Config } from "../../protocols/config"
import * as fs from "fs"
@Injectable()
export class ConfigService {
    private readonly logger = new Logger("MailService");
    private readonly config: Config;
    constructor(){
        this.logger.log("ConfigService initialize");
        const configBuffer = fs.readFileSync("/root/repos/ReciteEbbinghausEmail/ree/config.toml")
        const configStr = configBuffer.toString();
        this.config = toml.parse(configStr);
    }

    public getConfig():Config{
        return this.config;
    }
}
