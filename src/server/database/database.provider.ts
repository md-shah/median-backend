import { Sequelize } from 'sequelize-typescript';
import * as dbConfig from '../config/database.config';
import User from '../../models/user.model';

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
];

export default databaseProviders;
