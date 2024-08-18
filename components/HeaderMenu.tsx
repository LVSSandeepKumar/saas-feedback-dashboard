"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";
import { CreditCard, Folder, Menu, X } from "lucide-react";
import Link from "next/link";

const HeaderMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <DropdownMenu open={open} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
        <Button className="mr-4" variant="secondary">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href={"/dashboard"} className="flex">
            <Folder className="size-4 mr-2" />
            <span>Projects</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={"/payments"} className="flex">
            <CreditCard className="size-4 mr-2" />
            <span>Billing</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
