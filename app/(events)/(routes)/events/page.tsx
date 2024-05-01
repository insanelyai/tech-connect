"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../_components/Sidebar";
import Event from "../../_components/Event";
import Calender from "../../_components/Calender";
import axios from "axios";
import { Separator } from "@/components/ui/separator";

const page = () => {
  const [events, setEvents] = useState([
    {
      event: "",
      image: "",
      date: "",
      description: "",
    },
  ]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("api/event/fetch");
      setEvents(res.data);
      console.log(res.data);
    };

    fetchEvents();
  }, []);

  return (
    <div className='w-full h-[calc(100vh-100px)] flex   px-10'>
      <div className='w-[15%]'>
        <Sidebar />
      </div>
      <div className='flex-1 px-20 overflow-y-auto '>
        {events.map((e) => {
          return (
            <>
              <Event
                key={e.event}
                event={e.event}
                image={e.image}
                date={e.date}
                description={e.description}
              />
              <Separator />
            </>
          );
        })}
      </div>
      <div className='w-[20%]'>
        <Calender />
      </div>
    </div>
  );
};

export default page;
