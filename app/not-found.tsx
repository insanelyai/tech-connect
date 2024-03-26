"use client";

import React from "react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { ClientContext } from "./context/clientContext";

const NotFound = () => {
  const { setUser } = useContext(ClientContext);

  const User = async () => {
    try {
      const respone = await axios.get("/api/user/fetch");
      if (respone.status === 200) {
        setUser(respone.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    User();
  }, []);

  return (
    <div className='flex items-center justify-center w-[100%] h-[100%]'>
      <span>
        404 <Separator orientation='vertical' /> Page not found
      </span>
    </div>
  );
};

export default NotFound;
