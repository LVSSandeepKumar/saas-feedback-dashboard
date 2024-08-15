import NewProject from "@/components/NewProject";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import ProjectsList from "./ProjectsList";

const Page = async () => {
  const {userId} = auth();

  if(!userId) return null;

  const userProjects = await db.select().from(projects)
  .where(eq(projects.userId, userId));

  return (
    <div>
      <div className="flex items-center justify-between w-full">
      <h1 className="text-3xl font-bold text-center">Your Projects</h1>
      <NewProject />
      </div>
      <ProjectsList projects={userProjects}/>
    </div>
  );
};

export default Page;
