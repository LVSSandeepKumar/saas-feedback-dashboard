import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import HeaderMenu from "./HeaderMenu";

const PageHeader = () => {
  return (
    <header className="sticky inset-x-0 to-0 z-30 w-full transition-all backdrop-blur-md bg-white/20">
      <div className="w-full max-w-screen-xl px-2.5 lg:px-20 relative mx-auto border-b">
        <div className="h-14 flex items-center justify-between">
          <Image src="/saas-logo.png" alt="logo" width={32} height={32} />
          <div>
            <SignedOut>
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button className="ml-2">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
