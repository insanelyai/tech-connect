"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ClientContext } from "./context/clientContext";

export default function Home() {
  const { user, setUser } = useContext(ClientContext);

  const User = async () => {
    try {
      const respone = await axios.get("/api/user/fetch");
      if (respone.status === 200) {
        setUser(respone.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    User();
  }, []);

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full md:max-w-1/3 h-[50vh] space-y-6'>
        <h1 className='font-bold text-xl md:text-5xl text-center'>
          Code. Collaborate. Create.
        </h1>
        <p className='tracking-wider text-sm md:text-base text-center'>
          A platform for developers to collaborate on projects, share ideas, and
          have fun.
        </p>
        <Button variant='outline' className='text-sm md:text-base' asChild>
          <Link href={"/signup"}>Join the community!</Link>
        </Button>
      </div>
    </>
  );
}
