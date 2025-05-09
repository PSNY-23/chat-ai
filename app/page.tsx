"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UserButton, useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useCallback, useEffect } from "react";

export default function Home() {

  const { user } = useUser();
  const createUser = useMutation(api.user.createUser);

  const CheckUser = useCallback(async () => {
    const result = await createUser({
      email: user?.primaryEmailAddress?.emailAddress || "",
      imageUrl: user?.imageUrl || "",
      name: user?.fullName || "",
    });
    console.log(result);
  }, [createUser, user]);

  useEffect(() => {
    if (user) {
      CheckUser();
    }
  }, [CheckUser, user]);
  return (
    <div>
      <h1>This is pankaj and he i great.</h1>
      <Button>YEs i am button</Button>
      <UserButton />
    </div>
  );
}
