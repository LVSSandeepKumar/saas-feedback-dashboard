"use client";
import { Clipboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyButton = ({ text }: { text: string }) => {
  const copyToClipbaord = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Code copied");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => copyToClipbaord(text)}
            className="text-slate-50 p-6 absolute top-0 right-0"
          >
            <Clipboard />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy code</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CopyButton;
