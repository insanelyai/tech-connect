import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Signup from "./signup";

const page = () => {
  return (
    <div className='w-full h-full md:h-[calc(100vh-100px)] flex items-center justify-center '>
      <Card>
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription className='w-[300px]'>
            It's not all work and no play.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Signup />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default page;
