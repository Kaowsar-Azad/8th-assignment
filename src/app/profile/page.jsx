"use client"

import { authClient } from "@/lib/auth-client";
import { Avatar, Card, Button } from "@heroui/react";
import Link from "next/link";


import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const isPending = userData.isPending;

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/signin");
    }
  }, [user, isPending, router]);

  if (isPending || !user) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border mt-5">
        <Avatar className="h-20 w-20">
          <Avatar.Image
            alt="John Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>
            {user?.name}
          </Avatar.Fallback>
        </Avatar>

        <h2 className="text-xl font-bold">{user?.name}</h2>
        <p className="text-muted mb-4">{user?.email}</p>
        
        <Link href="/profile/update">
          <Button className="bg-purple-600 text-white mb-6">
            Update Profile
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProfilePage;