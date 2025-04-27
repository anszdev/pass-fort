const server = Bun.serve({
  port: 3001,
  fetch: (req) => {
    return new Response("Hello World");
  },
});

console.log(`Server running at http://localhost:${server.port}`);
