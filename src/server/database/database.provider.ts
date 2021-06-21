import { Sequelize } from 'sequelize-typescript';
import { Pool } from 'pg';
import * as dbConfig from '../config/database.config';
import postgresConfig from '../config/postgres.config';
import { User } from '../../models/user.model';

const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      await sequelize.authenticate();
      sequelize.addModels([User]);
      return sequelize;
    },
  },
  {
    provide: 'POSTGRES_CONNECTION',
    useFactory: async () => {
      console.log(postgresConfig);
      const postgresConn = new Pool(postgresConfig);
      await postgresConn.query('SELECT NOW()');
      return postgresConn;
    },
  },
];

export default databaseProviders;
