import Link from "next/link";
import { type Metadata } from "next";
import { PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  LuciaAuth,
  NextjsLight,
  NextjsDark,
} from "./_components/feature-icons";


export const metadata: Metadata = {
  title: "Next.js Lucia Auth Starter Template",
  description:
    "A Next.js starter template with nextjs and Lucia auth. Includes drizzle, trpc, react-email, tailwindcss and shadcn-ui",
};

const githubUrl = "https://github.com/TomiRoura";


const HomePage = () => {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-300px)] max-w-5xl flex-col  items-center justify-center gap-4 py-5 text-center">
        <div className="p-4">
          <div className="mb-10 flex items-center justify-center gap-3">
            <NextjsIcon className="h-[52px] w-[52px]" />
            <PlusIcon className="h-8 w-8" />
            <LuciaAuth className="h-14 w-14" />
          </div>
          <h1 className="text-balance bg-gradient-to-tr  from-black/70 via-black to-black/60 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20  sm:text-5xl md:text-3xl lg:text-3xl">
            Next.js Lucia Auth 
          </h1>
          <p className="text-balance mb-4 mt-4 text-center text-muted-foreground md:text-lg lg:text-xl">
            A Next.js Authentication with a password reset, email validation and oAuth.
            Includes Lucia, Drizzle, tRPC, Stripe, tailwindcss, shadcn-ui and react-email.
          </p>
          <div className="mb-10">
            <div className="mx-auto max-w-[430px]">
            
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href={githubUrl}>
                <GitHubLogoIcon className="mr-1 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

function NextjsIcon({ className }: { className?: string }) {
  return (
    <>
      <NextjsLight className={className + " dark:hidden"} />
      <NextjsDark className={className + " hidden dark:block"} />
    </>
  );
}
