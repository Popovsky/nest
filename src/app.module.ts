import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ControllersModule} from './controllers/controllers.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_db',
      entities: [],
      synchronize: true,
    }),
    ControllersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
