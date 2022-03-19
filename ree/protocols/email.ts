export type MailUrl = string;

export class Mail{
    url: MailUrl;
    userId?: string;
}

export enum MailStatus {
    Success = 0x0,
    OtherError = 0x1,
    Timeout = 0x2,
    RedisError = 0x4,
}

export interface MailResponse {
    statusCode: MailStatus,
    status: string;
}

export class SendMailResponse implements MailResponse {
    statusCode: MailStatus;
    status: string;
    sendTime: number; // ms
}

export class AddMailResponse implements MailResponse {
    statusCode: MailStatus;
    status: string;
}

export class GetMailResponse implements MailResponse {
    statusCode: MailStatus;
    status: string;
    mail: Mail;
}

export class SetMailResponse implements MailResponse {
    statusCode: MailStatus;
    status: string;
}

export class DelMailResponse implements MailResponse {
    statusCode: MailStatus;
    status: string;
}



export interface MailRequest{}

export class AddMailRequest implements MailRequest{
    mail: MailUrl;
}

export class SetMailRequest implements MailRequest{
    mailId: string;
    mail: Mail;
}

export class DelMailRequest implements MailRequest{
    mailId: string;
}

export class GetMailRequest implements MailRequest{
    mailId: string;
}