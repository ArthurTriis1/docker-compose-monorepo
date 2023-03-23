import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const server = Fastify();

server.get("/tasks", async () => {
	return prisma.task.findMany();
});

server.listen({ port: 3000 }).then(() => console.log("Server started!!"));
