"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";

const EventCal = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className='h-[100%]'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md w-[100%] h-[100%]'
      />
    </div>
  );
};

export default EventCal;
