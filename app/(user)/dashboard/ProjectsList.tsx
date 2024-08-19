import { projects } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { planId } from "@/lib/payments";
import SubscribeBtn from "../payments/SubscribeButton";
import { Lock } from "lucide-react";

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
        <Card className="max-w-[350px] flex flex-col h-full bg-gray-300">
          <CardHeader className="flex-1">
            <CardTitle className="flex text-sm md:text-lg items-center">
              <Lock className="size-4 md:size-8 mr-2" />
              <span>Upgrade to premium</span>
            </CardTitle>
            <CardDescription className="mt-3">
              Unlock unlimited projects with one-off payment
            </CardDescription>
          </CardHeader>
          <SubscribeBtn price={planId} />
        </Card>
      </ul>
    </div>
  );
};

export default ProjectsList;
