import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import AppController from './app.controller';
import AppService from './app.service';
import ApiModule from './api/api.module';
import DatabaseModule from './server/database/database.module';
import LoggingInterceptor from './shared/interceptors/logging.interceptor';
import ResponseInterceptor from './shared/interceptors/response.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./src/server/environments/.${process.env.NODE_ENV}.env`,
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
