import {neon} from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/db/schema";
import "dotenv/config";
import assert from "node:assert";

// prove if db found
assert(process.env.DATABASE_URL, "You need a DATABASE_URL");

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql, {schema});

export {sql};

export default db;