import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as Joi from 'joi';
import AppController from './app.controller';
import AppService from './app.service';
import ApiModule from './api/api.module';
import DatabaseModule from './server/database/database.module';
import LoggingInterceptor from './shared/interceptors/logging.interceptor';
import ResponseInterceptor from './shared/interceptors/response.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      // validationSchema: Joi.object({
      //   NODE_ENV: Joi.string()
      //     .valid('development', 'production', 'test', 'provision')
      //     .default('development'),
      //   DB_DIALECT: Joi.string().default('postgres'),
      //   DB_HOST: Joi.string().default('127.0.0.1'),
      //   DB_PORT: Joi.number().default(5432),
      //   DB_USERNAME: Joi.string().default('postgres'),
      //   DB_PASSWORD: Joi.string().default('password'),
      //   DB_NAME: Joi.string().default('dvd-rental'),
      // }),
      isGlobal: true,
    }),
    DatabaseModule,
    ApiModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export default class AppModule {}
