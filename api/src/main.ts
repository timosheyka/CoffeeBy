import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
// import * as express from 'express';
import * as serveStatic from 'serve-static';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/_next', serveStatic(join(__dirname, '..', '..', 'web', '.next')));
  await app.listen(4000);
}
bootstrap();
