import {Controller, Get, Post, Patch, Delete} from '@nestjs/common';
import {TaskService} from '../services/task.service';
import {IUpdateTask} from '../interfaces/task.interface';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {
  }

  @Get()
  async getTasks() {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  async getTaskById(taskId: number) {
    return this.taskService.getTaskById(taskId);
  }

  @Post()
  async createTask(taskInfo: string) {
    return this.taskService.createTask(taskInfo);
  }

  @Patch(':taskId')
  async updateTaskById(taskInfo: IUpdateTask) {
    return this.taskService.updateTaskById(taskInfo);
  }

  @Delete(':taskId')
  async removeTaskById(taskId: number) {
    return this.taskService.removeTaskById(taskId);
  }
}
