import nodeMailer from "nodemailer";

import { MailGateway, MailOptions } from "../../core";
import config from "../config";

export class Nodemailer implements MailGateway {
  private transporter: nodeMailer.Transporter;

  constructor() {
    this.transporter = nodeMailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      service: config.smtp.service,
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass
      }
    });
  }

  async sendMail(options: MailOptions): Promise<void> {
    await this.transporter.sendMail(options);
  }
}
