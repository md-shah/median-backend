import { ConfigService } from '@nestjs/config';
import databasePoolFactory from '../config/postgres.config';
import sequelizeFactory from '../config/database.config';

const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: sequelizeFactory,
  },
  {
    provide: 'POSTGRES_CONNECTION',
    inject: [ConfigService],
    useFactory: databasePoolFactory,
  },
];

export default databaseProviders;
