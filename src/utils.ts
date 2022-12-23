import { Client, Gender, Service } from './types';

export const emptyClient: Client = {
  name: '',
  phone: '',
  email: '',
  dayOfBirth: 0,
  monthOfBirth: '',
  gender: Gender.Undefined,
  clientInfo: '',
  enableReminderSms: true,
  enableMarketingSms: true,
};

export const emptyService: Service = {
  name: '',
  price: 0,
  duration: 0,
  employee: '',
  index: 0,
};
