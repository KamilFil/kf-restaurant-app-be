import { DataSourceOptions } from 'typeorm';

export const DatabaseConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'p_restaurant_app',
  entities: ['./dist/**/**.entity{.ts,.js}'],
  synchronize: true,
  bigNumberStrings: true,
} as DataSourceOptions;
