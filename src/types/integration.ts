export type Integration = {
  id: number;
  capability: number;
  url: string;
  user: string;
  password: string;
  token: string;
  successCriteria: string;
  lastUpdate: string; // example "2022-03-10",
  name: string;
  hash: string;
};
