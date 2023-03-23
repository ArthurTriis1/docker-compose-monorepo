import { ListTaskService } from "@monorepo/core";
import { TaskRepository } from "@src/repositories/TaskRepository";
import { FastifyReply, FastifyRequest } from "fastify";

export async function list(request: FastifyRequest, reply: FastifyReply) {
	const listTasks = new ListTaskService(new TaskRepository());

	const tasks = await listTasks.execute();

	return reply.status(200).send(tasks);
}
