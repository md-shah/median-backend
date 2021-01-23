import { Sequelize } from 'sequelize-typescript';
import dbConfig from '../config/database.config';

const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const sequelize = new Sequelize(dbConfig);
      await sequelize.authenticate();
      sequelize.addModels([]);
      return sequelize;
    },
  },
];

export default databaseProviders;
