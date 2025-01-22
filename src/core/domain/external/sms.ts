export type SMSOptions = {
  from: string;
  mobileNo: string;
  message: string;
};

export interface SMSGateway {
  sendSMS: (options: SMSOptions) => Promise<void>;
}
