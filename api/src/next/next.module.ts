// src/next/next.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { NextMiddleware } from './next.middleware';

@Module({})
export class NextModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(NextMiddleware).forRoutes('*');
  }
}
