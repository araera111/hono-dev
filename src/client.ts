import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

const uri = Deno.env.get("MONGO_URI") ?? "mongodb://127.0.0.1:27017";
export const client = new MongoClient();
await client.connect(uri);
