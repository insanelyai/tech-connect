import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
