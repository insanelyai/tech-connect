"use client";

import React, { useContext, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { LogIn, User } from "lucide-react";
import { ClientContext } from "../context/clientContext";

const Navbar = () => {
  const { user } = useContext(ClientContext);

  const routes: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: "Chat", href: "/chat" },
    { title: "Events", href: "/events" },
  ];

  return (
    <div className='flex items-center justify-between px-10 w-[100%] h-[100px]'>
      <div className='flex'>
        <Link href={"/"}>
          <Image
            src={"./logo.svg"}
            alt={"ConnectTech Logo"}
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div className='hidden md:flex gap-5'>
        <ModeToggle />
        {routes.map((route) => {
          return (
            <Button
              variant='link'
              key={route.href}
              className='text-foreground hover:bg-secondary'
              asChild>
              <Link href={route.href}>{route.title}</Link>
            </Button>
          );
        })}
        {/* <Button variant='secondary' asChild>
          <Link href={"/login"}>Login</Link>
        </Button> */}

        {user.username === "" ? (
          <Button variant='secondary' asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
        ) : (
          <Button variant='secondary' size={"icon"} asChild>
            <Link href={"/profile"}>
              <User />
            </Link>
          </Button>
        )}
      </div>
      <div className='md:hidden flex gap-5'>
        <ModeToggle />

        {/* <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/login"}>
            <LogIn strokeWidth={1} />
          </Link>
        </Button> */}

        {user.username === "" ? (
          <Button variant={"outline"} size={"icon"} asChild>
            <Link href={"/login"}>
              <LogIn strokeWidth={1} />
            </Link>
          </Button>
        ) : (
          <Button variant='secondary' size={"icon"} asChild>
            <Link href={"/profile"}>
              <User />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
