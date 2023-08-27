import { auth, UserButton } from "@clerk/nextjs/app-beta";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { userId } = auth();
  return (
    <div className="px-4 py-3 flex justify-between border-b-[1px] shadow-sm ">
      <div className="flex items-center gap-16">
        <Link href="/">
          <Image src={"/Logo_1.png"} width={100} height={100} alt="logo" />
        </Link>
   


        <div className="flex gap-4">

       
        <h2>Home</h2>
        <h2>History</h2>

        <h2>Help</h2>
        </div>
        </div>
        

        
        
    

   <div className="flex gap-4 items-center">

 
          {!userId ? (
            <>
              <Link href="sign-in">Sign in</Link>
              <Link href="sign-up">Sign up</Link>
            </>
          ) :
          <UserButton afterSignOutUrl="/" />
          }
            </div>
        
    
        
      
   
    </div>
  );
};

export default Navbar;
