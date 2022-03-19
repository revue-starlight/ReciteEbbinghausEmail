import { Mail, MailRequest,MailUrl } from "../../protocols/email"
import { IsEmail, IsNumberString } from 'class-validator'
export class MailRequestDto implements MailRequest {
    @IsEmail()
    email: MailUrl;
}

export class ModifyEmailRequestDto implements MailRequest {
    @IsEmail()
    email: MailUrl;
}

export class DeleteEmailRequestDto implements MailRequest {
    @IsNumberString()
    emailId: string;
}

export class AddEmailRequestDto implements MailRequest{
    @IsEmail()
    email: MailUrl;

}