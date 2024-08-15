import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Plus } from "lucide-react";
import { CreateProject } from "@/actions/CreateProject";
import SubmitProjectButton from "./SubmitProjectButton";

const NewProject = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4 mr-1" />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-md">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={CreateProject}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" placeholder="Project Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="url">URL</Label>
              <Input name="url" id="url" placeholder="https://example.com" />
            </div>
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              placeholder="Project Description (optional)"
            />
          </div>
          <SubmitProjectButton />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewProject;
