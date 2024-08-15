import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";

const page = async ({params} : {
    params: {
        projectId : string
    }
}) => {
    if(!params.projectId) {
        return (
            <div>
                Invalid Project Id
            </div>
        )
    }

    const project = await db.query.projects.findMany({
        where: (eq(projects.id, parseInt(params.projectId)))
    })
    return (
        <div>
            Project Page {params.projectId}
        </div>
    )
}

export default page;