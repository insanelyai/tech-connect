import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Special = () => {
  return (
    <div className='w-[100%] bg-secondary my-10 px-10 py-10'>
      <h2 className='text-xl font-semibold tracking-wider my-10 rounded-sm bg-secondary uppercase'>
        From the React Team
      </h2>
      <div className=' flex items-center'>
        <div className='flex flex-col items-start justify-start'>
          <Image
            src={"/special.png"}
            alt='Featured'
            sizes={"70vh"}
            width={50}
            height={50}
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundPosition: "center",
            }}
            className='rounded-sm'
          />
        </div>
        <div className='flex flex-col flex-1 items-start px-10 justify-center gap-5'>
          <h1 className='w-[90%] pt-5 text-2xl font-semibold tracking-wide'>
            React Navigation v7 sneak peek: Static API introduced
          </h1>
          <p className='w-[90%] text-base tracking-wide'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            culpa, blanditiis quis tenetur earum laudantium doloremque! Nihil
            doloribus odio sint a recusandae, reiciendis rerum tempore at
            tempora id quos ipsam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo temporibus minima sed ab excepturi
            dignissimos quidem earum culpa perspiciatis odit vitae nesciunt
            similique veritatis modi illum libero, quos animi. Autem.
          </p>
          <Button
            variant={"link"}
            className='text-foreground  underline hover:text-primary transition-all duration-200 my-4'>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Special;
