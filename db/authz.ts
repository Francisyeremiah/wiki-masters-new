import { eq } from "drizzle-orm";
import db from "@/db/index";
import {articles} from "@/db/schema";

export async function canUserEditArticle(userId:string, articleId: number): Promise<boolean>{
    const result = await db
    .select({
        authorId: articles.authorId,
    })
    .from(articles)
    .where(eq(articles.id, articleId))
    
    if(!result || result.length === 0){
        return false
    }

    return result[0].authorId === userId
}