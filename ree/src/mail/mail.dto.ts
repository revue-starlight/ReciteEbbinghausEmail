import { Mail, EmailRequest,MailUrl } from "../../protocols/email"
import { IsEmail, IsNumberString } from 'class-validator'
export class MailRequestDto implements EmailRequest {
    @IsEmail()
    email: MailUrl;
}

export class ModifyEmailRequestDto implements EmailRequest {
    @IsEmail()
    email: MailUrl;
}

export class DeleteEmailRequestDto implements EmailRequest {
    @IsNumberString()
    emailId: string;
}

export class AddEmailRequestDto implements EmailRequest{
    @IsEmail()
    email: MailUrl;

}