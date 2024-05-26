"use strict";

import http from "http";
import app from "./src/app.js";
import profile from "./src/configs/profile.config.js";

const { port } = profile.app;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port} !!!`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Server stopped !!!`));
});
