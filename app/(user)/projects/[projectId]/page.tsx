import { db } from "@/db";
import { projects as dbProjects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { ChevronLeft, Code, Globe } from "lucide-react";
import Link from "next/link";
import Table from "@/components/Table";

const page = async ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) {
    return <div>Invalid Project Id</div>;
  }

  const projects = await db.query.projects.findMany({
    where: eq(dbProjects.id, parseInt(params.projectId)),
    with: {
      feedbacks: true,
    },
  });

  const project = projects[0];

  console.log(project);
  return (
    <div>
      <div className="w-fit">
        <Link
          href={"/dashboard"}
          className="flex items-center text-indigo-700 mb-3"
        >
          <ChevronLeft className="size-5 mr-1" />
          <span className="text-lg">Back to Projects</span>
        </Link>
      </div>
      <div className="flex items-start justify-between">
        <div className="proj-info">
          <h1 className="text-3xl font-bold mb-3">{project.name}</h1>
          <h2 className="text-primary-background text-xl mb-2">
            {project.description}
          </h2>
        </div>
        <div className="flex flex-col">
          {project.url ? (
            <Link
              href={project.url}
              className="underline text-indigo-700 flex items-center"
            >
              <Globe className="size-5 mr-1" />
              <span className="text-lg">Visit Site</span>
            </Link>
          ) : null}
          <Link
            href={`/projects/${params.projectId}/instructions`}
            className="underline text-indigo-700 flex items-center mt-2"
          >
            <Code className="size-5 mr-1"/>
            <span className="text-lg">Embed Code</span>
          </Link>
        </div>
      </div>
      <div>
        <Table data={project.feedbacks} />
      </div>
    </div>
  );
};

export default page;
