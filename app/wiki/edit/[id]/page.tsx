import WikiEditor from "@/components/wiki-editor";
import {hexclaveServerApp} from "@/stack/server";

interface WikiEditPageProps{
    params: {
        id: string
    };
}

function getArticle(id: string){
    return {
        title: "Example Article",
        content: 
            `## Edit this Article 
            \n\nArticle ID: **${id}**
            \n\nStart Editing The Markdown Content Here.`
        ,
    };
}

export default async function WikiEditPage({params}: WikiEditPageProps) {
    await hexclaveServerApp.getUser({or: "redirect"});

    const article = getArticle(params.id);

    return(
        <WikiEditor
            initialTitle={article.title}
            initialContent={article.content}
            isEditing
            articleId={params.id}
        />
    )
}