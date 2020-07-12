import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';
import { ConfigModule } from '@nestjs/config';
import AppController from './app.controller';
import AppService from './app.service';
import dbConfig from './server/config/database.config';
import ApiModule from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./src/server/environments/.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres' as Dialect,
      ...dbConfig(),
    }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
