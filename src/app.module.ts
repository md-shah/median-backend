import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AppController from './app.controller';
import AppService from './app.service';
import ApiModule from './api/api.module';
import DatabaseModule from './server/database/database.module';

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
  providers: [AppService],
})
export default class AppModule {}
