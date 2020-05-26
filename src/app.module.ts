import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import AppController from './app.controller';
import AppService from './app.service';
import dbConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./src/environments/.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      ...dbConfig(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
