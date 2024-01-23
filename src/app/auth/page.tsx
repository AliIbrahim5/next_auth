import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import SignInWithGithub from "../components/SignInWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import React from "react";
import { redirect } from "next/navigation";

export default  async function AuthRoute() {
  const session = await getServerSession(authOptions);
   if (session) {
     redirect("/");
   }
    return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>please sign in </CardTitle>
          <CardDescription>
            to access the private page you to have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2">
            
              <Input name="email" type="email" placeholder="name@ex.com" />
            </div>
            <Button className="mt-4">Login with Email</Button>
            <SignInWithGithub />
            
          </div>
        </CardContent>
      </Card>
    </div>
  );
 }
 

