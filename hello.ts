import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { Hono } from "https://deno.land/x/hono@v3.2.1/mod.ts";
import { client } from "./src/client.ts";

const app = new Hono();

app.get("/", (c) => c.text("Hello Hono! v2"));
app.get("/mongo", async (c) => {
  const db = client.database("test").collection("test");
  const result = await db.insertOne({ hello: "world" });
  c.json(result);
});

serve(app.fetch);
