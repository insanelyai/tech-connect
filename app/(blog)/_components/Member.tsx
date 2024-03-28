import { Button } from "@/components/ui/button";
import React from "react";

const Member = () => {
  return (
    <div className='px-10 my-10 flex items-center justify-center flex-col space-y-5'>
      <h2 className='text-2xl font-semibold tracking-wide'>
        What to share your thoughts?
      </h2>
      <p className='text-base'>
        Join the community for developers, by developers
      </p>
      <Button
        variant={"link"}
        className='bg-secondary hover:bg-primary text-foreground'>
        Become a member
      </Button>
    </div>
  );
};

export default Member;
