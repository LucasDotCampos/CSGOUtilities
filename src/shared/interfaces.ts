import { Timestamp } from "typeorm";

export interface INades {
  id: string;
  name: string;
  picture: string;
  updated_at: Timestamp;
  created_at: Timestamp;
}

export interface IMaps {
  id: string;
  name: string;
  picture: string;
  updated_at: Timestamp;
  created_at: Timestamp;
}

export interface IMapsCreation {
  name: string;
  picture: string;
}
