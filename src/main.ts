import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import AppModule from './app.module';
import convertStringToSentenceCase from './shared/helpers/convertToSentenceCase';
import { name, version, description } from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

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
