import { Sequelize } from 'sequelize-typescript';

const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'nest',
      });
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

export default databaseProviders;
