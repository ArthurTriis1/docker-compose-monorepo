import Fastify from "fastify";
import cors from "@fastify/cors";
import { taskRoutes } from "@src/controllers/tasks/routes";

export const app = Fastify();

app.register(cors, {
	origin: "*",
});

app.register(taskRoutes);
