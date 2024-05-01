import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

interface EventProps {
  event: string;
  image: string;
  description: string;
  date: string;
}

const Event = ({ event, image, description, date }: EventProps) => {
  return (
    <div className='flex flex-col px-10 py-5 scroll-smooth'>
      <span className='text-lg font-bold'>EVENT</span>
      <span className='text-base font-bold text-secondary'>
        {date.toString().split("T")[0]}
      </span>

      <div className='flex flex-col space-y-6'>
        <h2 className='text-3xl font-black tracking-wide uppercase'>{event}</h2>
        <span className='text-base font-medium'></span>
        <div className='w-full'>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={image}
              alt={event}
              fill
              sizes='100vh'
              className='rounded-md object-cover'
            />
          </AspectRatio>
        </div>
        <div className='w-full flex flex-col space-y-3'>
          <span className='text-lg font-bold '>DESCRIPTION</span>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Event;
