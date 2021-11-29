import {MiddlewareConsumer, NestModule, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CounterModule } from './counter/counter.module';
import {LoggerMiddleware} from './middlewares/count.middleware';

@Module({
  imports: [CounterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
        .apply(LoggerMiddleware)
        .forRoutes('counter/count');
  }
}
