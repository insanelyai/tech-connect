"use client";

import React, { useEffect, useState } from "react";
import EventButton from "./EventButton";
import axios from "axios";

const Sidebar = () => {
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
    <div className='flex flex-col items-center gap-5 px-5 py-5'>
      <span className='text-lg font-bold'>UPCOMING EVENTS</span>

      <div className='flex flex-col space-y-5'>
        {events.map((e) => {
          return <EventButton key={e.date} linktag={e.event} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
