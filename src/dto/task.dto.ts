import {Status} from '../enums/task.enum';
import {IsNotEmpty} from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  content: string;
}

export class UpdateTaskDto {
  content?: string;
  status?: Status;
}
