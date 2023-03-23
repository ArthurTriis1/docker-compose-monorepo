import { hello } from "@monorepo/core";
import Fastify from "fastify";

const server = Fastify();

server.get("/ping", async () => {
	return { pong: hello };
});

server.listen({ port: 3000 }).then(() => console.log("Server started!!"));
