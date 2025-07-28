import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sign In",
};

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const user = await currentUser();
  if (user) redirect("/dashboard");

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-lg border bg-card p-8 shadow-lg dark:bg-card/40">
      <h1 className="text-2xl font-semibold">Welcome back</h1>
      {/* Clerk pre-built form */}
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" afterSignInUrl="/dashboard" />
      <p className="text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className={buttonVariants({ variant: "link" })}>
          Create one
        </Link>
      </p>
    </div>
  );
}
