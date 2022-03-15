import { Mail, EmailRequest,MailUrl } from "../../protocols/email"
import { IsEmail } from 'class-validator'
export class MailRequestDto implements EmailRequest {
    @IsEmail()
    email: MailUrl;
}

export class ModifyEmailRequestDto implements EmailRequest {
    @IsEmail()
    email: MailUrl;
}

export class DeleteEmailRequestDto implements EmailRequest {
    @IsEmail()
    email: MailUrl;
}

export class AddEmailRequestDto implements EmailRequest{
    @IsEmail()
    email: MailUrl;

}