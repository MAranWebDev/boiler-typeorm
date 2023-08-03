import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../db/entity/User';

export const AppDataSource = new DataSource({
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
