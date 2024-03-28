import React from "react";
import Event from "./event";

const Sidebar = () => {
  return (
    <div className='w-[15%] h-[calc(100vh-100px)] border-r-2 border-r-secondary flex flex-col items-start justify-start'>
      <span className='text-xl uppercase tracking-wider font-semibold py-10 '>
        Upcoming Events
      </span>

      <div className='flex flex-col items-center justify-center space-y-5'>
        <Event name={"Mumbai Hacks"} dates={"16/4/24 - 20/4/24"} />
        <Event name={"Devcon"} dates={"23/4/24"} />
        <Event name={"GDSE Global"} dates={"30/4/24"} />
      </div>
    </div>
  );
};

export default Sidebar;
