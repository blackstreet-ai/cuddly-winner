import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Create Account",
};

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function SignUpPage() {
  const user = await currentUser();
  if (user) redirect("/dashboard");

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 rounded-lg border bg-card p-8 shadow-lg dark:bg-card/40">
      <h1 className="text-2xl font-semibold">Create your account</h1>
      {/* Clerk pre-built form */}
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" afterSignUpUrl="/dashboard" />
      <p className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/sign-in" className={buttonVariants({ variant: "link" })}>
          Sign in
        </Link>
      </p>
    </div>
  );
}
