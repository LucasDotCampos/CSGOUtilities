import { Timestamp } from "typeorm";
import UserEntity from "../modules/users/typeorm/entities/UserEntity";

export interface INades {
  id: string;
  name: string;
  picture: string;
  from: string;
  to: string;
  link: string;
  tickrate: string;
  position: string;
  map: string;
  updated_at: Timestamp;
  created_at: Timestamp;
}

export interface INadesCreation {
  name: string;
  picture: string;
  from: string;
  to: string;
  tickrate: string;
  position: string;
  userId: any;
  link: string;
  map: string;
}

export interface INadesId {
  id: string;
}

export interface INadesUpdate {
  id: string;
  name: string;
  picture: string;
  from: string;
  to: string;
  tickrate: string;
  position: string;
  link: string;
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

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface IUserUpdate {
  userId: string;
  name: string;
  email: string;
  password?: string;
  oldPassword?: string;
}

export interface IUserValidate {
  email: string;
  password: string;
}

export interface IUserToken {
  user: UserEntity;
  token: string;
}

export interface IUserId {
  id: string;
}

export interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}
