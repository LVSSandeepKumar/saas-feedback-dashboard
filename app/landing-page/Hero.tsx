import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { Github, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grow">
      <div className="container mx-auto px-4 mb-24 mt-0 flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col justify-center max-w-sm">
          <div className="mb-8">
            <h1 className="mb-5 text-5xl font-extrabold leading-tight">
              Collect feedbacks seamlessly
            </h1>
            <p className="text-gray-500 text-lg">
              Easily integrate SAAS feedback widget and start collecting
              feedback.
            </p>
          </div>
          <div>
            <SignedOut>
              <SignUpButton>
                <Button>
                  <LogIn className="size-4 mr-2" />
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <Link href={"/dashboard"}>Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
        <div className="flex-1 max-w-lg">
          <Image
            src={"/demo.gif"}
            alt="demo"
            height={175}
            width={175}
            unoptimized={true}
            layout={"responsive"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
