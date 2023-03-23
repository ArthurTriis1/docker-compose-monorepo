import { ITaskRepository } from '@src/repositories/interfaces';

export class ListTaskService {
    constructor(private taskRepository: ITaskRepository) {}

    async execute() {
      return this.taskRepository.getAll();
    }
  }