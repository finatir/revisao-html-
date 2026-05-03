import { serve } from "bun";

const index = Bun.file("./index.html");

function getCurrentTimeBr() {
  const now = new Date();
  return now.toLocaleTimeString("pt-BR")
}

const server = Bun.serve({
  routes: {
    "/": index,
    "/time": () => new Response(getCurrentTimeBr())
  }
})

console.log(`Server running: ${server.port} ${Date.now()}`)








// bun init
// bun server.ts 