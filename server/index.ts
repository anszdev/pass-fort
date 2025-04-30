import { authRoutes } from "./routes/auth";

const server = Bun.serve({
  port: process.env.PORT || 3001,
  routes: authRoutes,
});

console.log(`Server running at http://localhost:${server.port}`);
