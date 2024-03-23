import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Login from "./login";

const page = () => {
  return (
    <div className='w-full h-full md:h-[calc(100vh-100px)] flex items-center justify-center '>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription className='w-[300px]'>Welcome back!</CardDescription>
        </CardHeader>
        <CardContent>
          <Login />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
