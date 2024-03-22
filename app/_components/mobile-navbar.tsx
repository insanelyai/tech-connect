import { Button } from "@/components/ui/button";
import { Calendar, Home, LayoutList, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const MobileNavbar = () => {
  return (
    <div className='w-full h-[70px] flex items-center justify-center gap-8 md:hidden fixed z-50 top-[90%] bg-secondary '>
      <Button
        size={"icon"}
        variant={"outline"}
        className='bg-secondary'
        asChild>
        <Link href={"/"}>
          <Home strokeWidth={1} />
        </Link>
      </Button>
      <Button
        size={"icon"}
        variant={"outline"}
        className='bg-secondary'
        asChild>
        <Link href={"/blog"}>
          <LayoutList strokeWidth={1} />
        </Link>
      </Button>
      <Button
        size={"icon"}
        variant={"outline"}
        className='bg-secondary'
        asChild>
        <Link href={"/chat"}>
          <MessageCircle strokeWidth={1} />
        </Link>
      </Button>
      <Button
        size={"icon"}
        variant={"outline"}
        className='bg-secondary'
        asChild>
        <Link href={"/calender"}>
          <Calendar strokeWidth={1} />
        </Link>
      </Button>
    </div>
  );
};

export default MobileNavbar;
