import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

const EventDisplay = () => {
  return (
    <div className='flex py-10 px-10 flex-1 h-[calc(100vh-100px)] bg-secondary space-y-3'>
      <div className='flex flex-col space-y-3 '>
        <h1 className='text-3xl font-semibold tracking-wider uppercase'>
          Mumbai Hacks
        </h1>
        <div>
          <span className='text-medium'>Date: 16/4/24 - 20/4/24</span>
        </div>
        <div>
          <Badge>Registration Open</Badge>
        </div>
        <div>
          <Image
            src={"/event.png"}
            alt='Featured'
            sizes={"100vh"}
            width={100}
            height={100}
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundPosition: "center",
            }}
            className='rounded-sm my-5'
          />
        </div>
        <div className='my-6'>
          <span className='text-3xl'>Details</span>
        </div>
      </div>
    </div>
  );
};

export default EventDisplay;
