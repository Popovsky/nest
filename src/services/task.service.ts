import {Injectable} from '@nestjs/common';
import {ITask, IUpdateTask} from '../interfaces/task.interface';
import {Status} from '../enums/task.enum';

@Injectable()
export class TaskService {
  private readonly data: Array<ITask> = [];

  getTasks(): Array<ITask> {
    return this.data;
  }

  getTaskById(taskId: number): ITask {
    return this.data.find(task => task.id === taskId);
  }

  createTask(taskInfo: string): ITask {
    const newTask = {
      id: Date.now(),
      content: taskInfo,
      status: Status.active,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.data.push(newTask);
    return newTask;
  }

  removeTaskById(taskId: number): ITask {
    const removedTask: ITask = this.data.find(task => task.id === taskId);
    removedTask.status = Status.removed;
    removedTask.updatedAt = Date.now();
    return removedTask;
  }

  updateTaskById(taskInfo: IUpdateTask): ITask {
    const updatedTask = this.data.find(task => task.id === taskInfo.id);
    Object.keys(taskInfo).map(prop => updatedTask[prop] = taskInfo[prop]);
    updatedTask.updatedAt = Date.now();
    return updatedTask;
  }
}
