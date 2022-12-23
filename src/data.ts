import { Client, Service, Gender, Employee } from './types';

export const clients: Client[] = [
  {
    name: 'Felindra Tête de Tigre',
    phone: '06 87 96 47 91',
    email: 'felindra.t@fort-boyard.fr',
    dayOfBirth: 5,
    monthOfBirth: 'Juin',
    gender: Gender.Female,
    clientInfo: 'Adore les chats',
    enableReminderSms: true,
    enableMarketingSms: false,
  },
  {
    name: 'Passe Partout',
    phone: '06 67 13 55 70',
    email: 'passe.p@fort-boyard.fr',
    dayOfBirth: 28,
    monthOfBirth: 'Sept',
    gender: Gender.Male,
    clientInfo: 'Muet',
    enableReminderSms: false,
    enableMarketingSms: true,
  },
  {
    name: 'Père Fouras',
    phone: '06 44 96 71 00',
    email: 'Pere.ft@fort-boyard.fr',
    dayOfBirth: 7,
    monthOfBirth: 'Mars',
    gender: Gender.Male,
    clientInfo: 'Chauve',
    enableReminderSms: true,
    enableMarketingSms: true,
  },
];

export const servicesList: Service[] = [
  {
    name: 'Coupe homme (cheveux court)',
    price: 33,
    duration: 30,
    employee: '',
  },
  {
    name: 'Coupe femme (cheveux long)',
    price: 57,
    duration: 30,
    employee: '',
  },
  {
    name: 'Coupe + Balayage + Couleur + Shampoing + Mise en pli (cheveux long & épais)',
    price: 100,
    duration: 90,
    employee: '',
  },
];

export const employees: Employee[] = [
  { name: 'Jean-Michel' },
  { name: 'Martin' },
  { name: 'Anton' },
  { name: 'Sylvie' },
];
