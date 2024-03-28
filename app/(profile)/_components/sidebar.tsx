"use client";

import React from "react";
import SidebarRoutes from "./sidebar-rotues";

const Sidebar = () => {
  return (
    <div className='w-[15vw] h-[calc(100vh-100px)] shadow-l-sm rounded-r-sm border-r border-r-secondary flex items-center justify-start'>
      <SidebarRoutes />
    </div>
  );
};

export default Sidebar;
