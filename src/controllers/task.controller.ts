import {Controller, Get, Post, Patch, Delete, Param, Body, ParseIntPipe} from '@nestjs/common';
import {TaskService} from '../services/task.service';
import {IUpdateTask} from '../interfaces/task.interface';
import {UpdateTaskDto, CreateTaskDto} from '../dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {
  }

  @Get()
  async getTasks() {
    return this.taskService.getTasks();
  }

  @Get(':taskId')
  async getTaskById(@Param('taskId', ParseIntPipe) taskId: number) {
    return this.taskService.getTaskById(taskId);
  }

  @Post()
  async createTask(@Body() taskInfo: CreateTaskDto) {
    return this.taskService.createTask(taskInfo.content);
  }

  @Patch(':taskId')
  async updateTaskById(
    @Param('taskId', ParseIntPipe) taskId: number,
    @Body() taskInfo: UpdateTaskDto
  ) {
    return this.taskService.updateTaskById({id: taskId, ...taskInfo});
  }

  @Delete(':taskId')
  async removeTaskById(@Param('taskId', ParseIntPipe) taskId: number) {
    return this.taskService.removeTaskById(taskId);
  }
}
