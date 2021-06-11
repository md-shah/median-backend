import { Dialect } from 'sequelize/types';

const dbConfig = {
  dialect: (process.env.DB_DIALECT || 'postgres') as Dialect,
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'admin',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'expense_tracker',
  autoLoadModels: true,
  // eslint-disable-next-line no-console
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  synchronize: false,
};

export = dbConfig;
