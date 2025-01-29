import { Domain } from './domain';

export type Capability = {
  id: number;
  domain: Domain;
  flag: number;
  description: string;
  createdTimestamp: string; //example '2022-03-10';
};
