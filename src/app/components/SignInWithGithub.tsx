"use client";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import React from "react";

const SignInWithGithub = () => {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="mt-5"
      variant="secondary"
    >
      Login with Github <GithubIcon w-4 h-4 ml-4 />{" "}
    </Button>
  );
};

export default SignInWithGithub;
