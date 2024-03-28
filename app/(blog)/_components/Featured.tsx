import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className='my-10 px-10 flex'>
      <div className='flex flex-col flex-1 items-start justify-end gap-5'>
        <h2 className='text-xl font-semibold tracking-wider p-3 rounded-sm bg-secondary'>
          FEATURED
        </h2>
        <h1 className='w-[90%] pt-5 text-2xl font-semibold tracking-wide'>
          An open source component library optimized for fast development, easy
          maintenance, and accessibility.
        </h1>
        <p className='w-[90%] text-base tracking-wide'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          culpa, blanditiis quis tenetur earum laudantium doloremque! Nihil
          doloribus odio sint a recusandae, reiciendis rerum tempore at tempora
          id quos ipsam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Explicabo temporibus minima sed ab excepturi dignissimos quidem
          earum culpa perspiciatis odit vitae nesciunt similique veritatis modi
          illum libero, quos animi. Autem.
        </p>
        <Button
          variant={"link"}
          className='text-foreground bg-secondary hover:bg-primary transition-all duration-200 my-4'>
          Read More
        </Button>
      </div>

      <div className='flex items-end justify-end'>
        <Image
          src={"/featured.png"}
          alt='Featured'
          sizes={"100vh"}
          width={100}
          height={100}
          style={{
            width: "100%",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
          className='rounded-sm'
        />
      </div>
    </div>
  );
};

export default Featured;
