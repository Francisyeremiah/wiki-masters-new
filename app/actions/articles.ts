"use server"

import { redirect } from "next/navigation";
import { hexclaveServerApp } from "@/stack/server";
import { eq } from "drizzle-orm";
import { articles } from "@/db/schema";
import db from "@/db/index";

export type CreateArticleInput = {
    title: string;
    content: string;
    imageUrl?: string;
}

export type UpdateArticleInput = {
    title?: string;
    content?: string;
    imageUrl?: string;
}

export async function createArticle(data:CreateArticleInput) {
    const user = await hexclaveServerApp.getUser();

    if(!user){
        throw new Error("☠ Unauthorized");
    }

    // await ensureUserExists(user);
    
    await db.insert(articles).values({
        title: data.title,
        content: data.content,
        slug: "" + Date.now(),
        published: true,
        authorId: user.id,
        imageUrl: data.imageUrl
    })

    return {
        success: true,
        message: "Article Created."
    }
}

export async function updateArticle(id: string, data: UpdateArticleInput) {
    const user = await hexclaveServerApp.getUser();
    
    if(!user){
        throw new Error("☠ Unauthorized");
    }

    // await ensureExists(user);

    // if(!(await canUserEditArticle(user.id, +id)))
}