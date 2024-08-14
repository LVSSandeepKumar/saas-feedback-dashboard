import NewProject from "@/components/NewProject";

import { db } from "@/db";
import { projects } from "@/db/schema";

const Page = async () => {

  const allProjects = await db.select().from(projects);
  console.log(allProjects);

  return (
    <div>
      <NewProject />
    </div>
  );
};

export default Page;
