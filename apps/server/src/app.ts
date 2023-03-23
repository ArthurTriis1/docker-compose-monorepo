import Fastify from "fastify";
import { taskRoutes } from "@src/controllers/tasks/routes";

export const app = Fastify();

app.register(taskRoutes);
