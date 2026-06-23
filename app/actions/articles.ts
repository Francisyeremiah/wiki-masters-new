"use server"

import { redirect } from "next/navigation";
import { hexclaveServerApp } from "@/stack/server";
import { eq } from "drizzle-orm";
import { articles } from "@/db/schema";
import db from "@/db/index";
import {ensureUserExists} from "@/db/sync-user"
import {canUserEditArticle} from "@/db/authz"

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

    await ensureUserExists(user);

    if(!(await canUserEditArticle(user.id, +id))){
        throw new Error("Forbidden");
    }

        await db

    .update(articles)
    .set({
        title: data.title,
        content: data.content,
        imageUrl: data.imageUrl
    })
    .where(eq(articles.id, +id))

    return {
        success: true,
        message: `Article ${id} Updated!`
    }
}


export async function deleteArticle(id:string) {
    const user = await hexclaveServerApp.getUser();

    if(!user){
        throw new Error("Unauthorized");
    }

    await ensureUserExists(user);

    if(!(await canUserEditArticle(user.id, +id))){
        throw new Error("Forbidden");
    }

    await db
    .delete(articles)
    .where(eq(articles.id, +id))

    return {
        success: true,
        message: `Article ${id} Deleted!`
    }

}

export async function deleteArticleForm(formData:FormData):Promise<void> {
    const id = formData.get("id")

    if(!id){
        throw new Error("Missing Article Id")
    }

    await deleteArticle(String(id));

    redirect("/")
}