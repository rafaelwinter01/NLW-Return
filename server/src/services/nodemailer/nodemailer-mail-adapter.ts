import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "3e018c0bf8a05f",
        pass: "cf88194dbd1e74"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe <feedback@feedget.com>',
            to: 'Rafael Winter <rafaelwinter01@gmail.com',
            subject,
            html: body
        })
    };
}