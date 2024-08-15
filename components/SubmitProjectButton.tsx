"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const SubmitProjectButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">
      {pending ? <Loader2 className="sixe-4 animate-spin" /> : "Create Project"}
    </Button>
  );
};

export default SubmitProjectButton;
