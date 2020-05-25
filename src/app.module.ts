import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import AppController from './app.controller';
import AppService from './app.service';
// import databaseProviders from './server/database/database.provider';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'blog-nestjs',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
