import {Status} from '../enums/task.enum';

export interface ITask {
  id: number,
  content: string,
  status: Status,
  createdAt: number,
  updatedAt: number,
}

export interface IUpdateTask {
  id: number,
  content?: string,
  status?: Status,
}
