import { projects } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Project = InferSelectModel<typeof projects>;

interface PROPS {
  projects: Project[];
}
const ProjectsList = (props: PROPS) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 m-5">
        {props.projects.map((project: Project) => (
          <li key={project.id}>
            <Card className="mx-w-[350px] flex flex-col rounded-md h-full">
              <CardHeader className="flex-1">
                <CardTitle>{project?.name}</CardTitle>
                <CardDescription>{project?.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
