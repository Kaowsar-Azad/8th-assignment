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
      <nav className="flex flex-col md:flex-row justify-between items-center py-3 max-w-7xl mx-auto w-full gap-4 md:gap-0">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src={"https://i.ibb.co.com/ksQbLy6K/A-simple-modern-app-icon-202605041715.jpg"}
            alt="logo"
            loading="eager"
            width={40}
            height={30}
            className="object-cover rounded-2xl h-auto w-auto"
          />
           <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                BookBound
              </span>
        </Link>

        <ul className="flex items-center gap-5 text-sm flex-wrap justify-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"}>All Books</Link>
          </li>

          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-5">
          { !user && (
            <ul className="flex items-center text-sm gap-5">
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
             <div className="flex gap-2 items-center">
                <span className="font-semibold text-sm hidden md:block">{user?.name}</span>
                <Avatar size="sm">
                  <Avatar.Image
                    alt={`${user?.name} profile image`}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
                </Avatar>
                <Button onClick={handelsignout} variant="danger" size="sm">Logout</Button>
             </div>
            )
          }
            
        </div>
      </nav>
    </div>
  );
};

export default Navbar;