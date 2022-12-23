export interface Client {
  name: string;
  phone: string;
  email: string;
  gender: Gender;
  dayOfBirth: number;
  monthOfBirth: string;
  clientInfo?: string;
  enableReminderSms: boolean;
  enableMarketingSms: boolean;
}

export enum Gender {
  Male = 'Homme',
  Female = 'Femme',
  Child = 'Enfant',
  Undefined = '',
}

export interface Service {
  name: string;
  price: number;
  duration: number;
  employee?: string;
  index?: number;
}

export interface Employee {
  name: string;
}

export interface RichDate {
  date: Date;
  wholeDay: boolean;
  from?: Date;
  to?: Date;
}
