import { Dialect } from 'sequelize/types';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../../models/user.model';

const sequelizeFactory = async (configService: ConfigService) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const sequelize = new Sequelize({
    dialect: configService.get('DB_DIALECT'),
    host: configService.get('DB_HOST'),
    port: parseInt(configService.get('DB_PORT'), 10),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    autoLoadModels: true,
    // eslint-disable-next-line no-console
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    synchronize: false,
  });

  await sequelize.authenticate();
  sequelize.addModels([User]);
  return sequelize;
};
export default sequelizeFactory;
