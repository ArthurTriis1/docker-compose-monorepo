import { app } from "./app";

app.listen({ port: 3001, host: "0.0.0.0" })
	.then(() => {
		console.log("🚀 HTTP Server Running!");
	})
	.catch((err) => console.log(err));
