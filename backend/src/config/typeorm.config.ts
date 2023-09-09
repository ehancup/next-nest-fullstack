import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/app/auth/auth.entitiy';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.SQL_HOST || 'localhost',
  port: 3306, //port default 3306 lihat xampp
  username: 'root', // username default xampp root
  password: '', // password default xampp string kosong
  database: 'ol_shop', // database default
  entities: [UserEntity],
  synchronize: true,
  logging: true, //
  // logger: 'debug', // logger
};
