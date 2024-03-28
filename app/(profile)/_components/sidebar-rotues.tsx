"use client";

import { ClientContext } from "@/app/context/clientContext";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Key, LucideIcon, Shield, Trash, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

interface routesInterface {
  icon: LucideIcon;
  name: string;
}

const sideroutes: routesInterface[] = [
  {
    icon: User,
    name: "Profile Information",
  },
  {
    icon: Shield,
    name: "Account Security",
  },
  {
    icon: Trash,
    name: "Delete Account",
  },
];

const SidebarRoutes = () => {
  const router = useRouter();
  const { logout } = useContext(ClientContext);

  const onLogout = async () => {
    try {
      const response = await axios.get("/api/auth/logout");

      console.log(response.data.message);

      logout();
      router.push("/");
    } catch (error) {
      console.log("[PROFILE ERROR]", error);
    }
  };

  return (
    <div className='w-full h-full'>
      <div className='flex flex-col justify-center items-center gap-4'>
        {sideroutes.map((route) => (
          <Button
            variant={"ghost"}
            className='space-x-2 w-[100%] h-[5vh] flex items-center justify-start rounded-xs'
            key={route.name}>
            <route.icon strokeWidth={1} size={20} />
            <span>{route.name}</span>
          </Button>
        ))}
        <Button
          className='space-x-2 my-4 w-[90%] h-[5vh] flex items-center justify-start rounded-sm'
          onClick={onLogout}>
          <Key strokeWidth={1} size={20} />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default SidebarRoutes;
