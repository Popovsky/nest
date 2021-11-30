import {Module} from '@nestjs/common';
import {CounterController} from './counter.controller';
import {CounterService} from '../services/counter.service';
import {TaskController} from './task.controller';
import {TaskService} from '../services/task.service';

@Module({
  controllers: [CounterController, TaskController],
  providers: [CounterService, TaskService],
})
export class ControllersModule {
}
