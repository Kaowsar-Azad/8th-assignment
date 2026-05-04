"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, TextField, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (!error) {
      toast.success("Profile updated successfully!");
      router.push("/profile");
    } else {
      toast.error(error.message || "Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 border">
        <h1 className="text-2xl font-bold text-center mb-6">Update Profile</h1>
        
        <form onSubmit={handleUpdate} className="flex flex-col gap-6">
          <TextField isRequired name="name" type="text" defaultValue={user?.name}>
            <Label>Name</Label>
            <Input placeholder="Enter your name" />
          </TextField>

          <TextField isRequired name="image" type="text" defaultValue={user?.image}>
            <Label>Image URL</Label>
            <Input placeholder="Enter image URL" />
          </TextField>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-purple-600 text-white">
              Update Information
            </Button>
            <Button 
              type="button" 
              variant="secondary" 
              onClick={() => router.push("/profile")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
