import { Timestamp } from "typeorm";

export interface INades {
  id: string;
  name: string;
  picture: string;
  updated_at: Timestamp;
  created_at: Timestamp;
}

export interface INadesCreation {
  name: string;
  picture: string;
}

export interface INadesId {
  id: string;
}

export interface INadesUpdate {
  id: string;
  name: string;
  picture: string;
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

export interface IMapId {
  id: string;
}

export interface IMapUpdate {
  id: string;
  name: string;
  picture: string;
}
