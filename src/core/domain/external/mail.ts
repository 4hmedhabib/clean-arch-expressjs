export type MailOptions = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export interface MailGateway {
  sendMail: (options: MailOptions) => Promise<void>;
}
