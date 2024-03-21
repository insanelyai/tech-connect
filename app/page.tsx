import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center max-w-1/3 h-[50vh] space-y-6'>
        <h1 className='font-bold text-5xl'>Code. Collaborate. Create.</h1>
        <p className='tracking-wider'>
          A platform for developers to collaborate on projects, share ideas, and
          have fun.
        </p>
        <Button variant='outline'>Join the community!</Button>
      </div>
    </>
  );
}
