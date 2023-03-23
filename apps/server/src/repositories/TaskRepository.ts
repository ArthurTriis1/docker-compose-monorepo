import { ITaskRepository } from "@monorepo/core";
import { prisma } from "@src/lib/prisma";

export class TaskRepository implements ITaskRepository {
	async getAll() {
		return prisma.task.findMany();
	}
}
