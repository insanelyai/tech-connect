import { Button } from "@/components/ui/button";
import React from "react";

const Event = ({ name, dates }: { name: string; dates: string }) => {
  return (
    <Button className='w-[100%] h-auto  mx-5 bg-secondary flex flex-col items-start justify-center space-y-2'>
      <span className='text-lg'>{name}</span>

      <span>Date: {dates}</span>
    </Button>
  );
};

export default Event;
