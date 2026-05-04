"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user
  

   const handelsignout = async () =>{
    await authClient.signOut();
   }


  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"https://i.ibb.co.com/ksQbLy6K/A-simple-modern-app-icon-202605041715.jpg"}
            alt="logo"
            loading="eager"
            width={40}
            height={30}
            className="object-cover rounded-2xl h-auto w-auto"
          />
           <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-clip-text ">
                BookBound
              </span>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Photos</Link>
          </li>

          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>

        <div className="flex gap-5">
          { !user && (
            <ul className="flex items-center  text-sm gap-5">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
          )
          }
          
          {
            user && (
             <div className="flex , gap-1.5">
                      <Avatar size="sm">
        <Avatar.Image
          alt="{user?.name} hre image"
          src={user?.image}
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
      </Avatar>
      <Button onClick={handelsignout} variant="danger">sign out</Button>
             </div>
            )
          }
            
        </div>
      </nav>
    </div>
  );
};

export default Navbar;