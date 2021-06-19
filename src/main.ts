import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import AppModule from './app.module';
import convertStringToSentenceCase from './shared/helpers/convertToSentenceCase';
import { description, name, version } from '../package.json';
import { AllExceptionsFilter } from './shared/filters/all-exception.filter';
import { ClassValidatorTransformer } from './shared/transformers/class-validator.transformer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: ClassValidatorTransformer,
      whitelist: true,
    }),
  );
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
