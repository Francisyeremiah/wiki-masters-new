// import { usersSync } from "drizzle-orm/neon";

//this down below is datatypes of creating 
// table into drizzle kit

import { 
    pgTable, 
    boolean,
    serial,
    text,
    timestamp 

} from "drizzle-orm/pg-core";

//this is how we create a table using drizzle kit

export const articles = pgTable("articles", {
    id: serial("id").primaryKey(),
    title: text("text").notNull(),
    slug: text("slug").notNull().unique(),
    content: text("content").notNull(),
    imageUrl: text("image_url"),
    published: boolean("published").default(false).notNull(),
    authorId: text("author_id").notNull().references(() => usersSync.id),
    createdAt: timestamp("created_at", {mode: "string"}).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", {mode: "string"}).defaultNow().notNull(),
});

const schema = {articles}

export default schema

export type Article = typeof articles.$inferSelect
export type NewArticle = typeof articles.$inferInsert


export const usersSync = pgTable("usersSync", {
    id: text("id").primaryKey(),
    name: text("name"),
    email: text("email")
});

export type User = typeof usersSync.$inferSelect

