import { FastifyInstance } from "fastify";
import { list } from "./list";

export async function taskRoutes(app: FastifyInstance) {
	app.get("/tasks", list);
}
