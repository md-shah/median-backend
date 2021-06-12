import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import AppModule from './app.module';
import convertStringToSentenceCase from './shared/helpers/convertToSentenceCase';
import { name, version, description } from '../package.json';
import { AllExceptionsFilter } from './shared/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new AllExceptionsFilter());

  const options = new DocumentBuilder()
    .setTitle(convertStringToSentenceCase(name.replace('-', ' ')))
    .setDescription(`${description}\nRunning on ${process.env.NODE_ENV} Mode`)
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
