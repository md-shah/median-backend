import { Dialect } from 'sequelize/types';

const dbConfig = {
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadModels: true,
  // eslint-disable-next-line no-console
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  synchronize: false,
};

export default dbConfig;
