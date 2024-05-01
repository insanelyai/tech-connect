"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ClientContext } from "./context/clientContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  const { user, setUser, logout } = useContext(ClientContext);

  const router = useRouter();

  const User = async () => {
    try {
      const respone = await axios.get("/api/user/fetch");
      if (respone.status === 200) {
        setUser(respone.data);
      }
    } catch (error: any) {
      if (error.response.status === 401) {
        logout();
      }
      console.log(error);
    }
  };

  useEffect(() => {
    User();
  }, []);

  return (
    <>
      <div className='w-[100%] h-[100%]'>
        <div className='flex flex-col items-center justify-center w-full md:max-w-1/3 h-[50vh] space-y-6'>
          <h1 className='font-bold text-xl md:text-5xl text-center'>
            Code. Collaborate. Create.
          </h1>
          <p className='tracking-wider text-sm md:text-base text-center'>
            A platform for developers to collaborate on projects, share ideas,
            and have fun.
          </p>
          <Button variant='outline' className='text-sm md:text-base' asChild>
            <Link href={"/signup"}>Join the community!</Link>
          </Button>
        </div>
        <div className='w-[100%] h-[30%]'>
          <AspectRatio ratio={16 / 4}>
            <Image
              src={"/backdrop.jpg"}
              alt='Image'
              fill
              className='rounded-md object-cover bg-gradient-to-b from-black from-50% to-transparent'
            />
          </AspectRatio>
        </div>
      </div>
    </>
  );
}
