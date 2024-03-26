"use client";

import { ClientContext } from "@/app/context/clientContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Plus } from "lucide-react";
import React, { useContext, useEffect } from "react";

const AddArticles = () => {
  const { user } = useContext(ClientContext);

  return (
    <Button
      size={"icon"}
      className={cn(
        user.isMember
          ? "w-[60px] h-[60px] fixed top-[90%] left-[95%]"
          : "hidden"
      )}>
      <Plus size={40} className='p-2' />
    </Button>
  );
};

export default AddArticles;
