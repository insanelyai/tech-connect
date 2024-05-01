import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import EventForm from "./EventForm";

const Calender = () => {
  return (
    <div className='flex flex-col items-center px-5 py-5'>
      <span className='text-lg font-bold'>CALENDAR</span>

      <div className='h-[80vh] flex flex-col justify-between'>
        <Calendar />
        <Sheet>
          <SheetTrigger asChild>
            <Button size={"lg"}>Add Event</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Create Event</SheetTitle>
              <SheetDescription>
                Make sure to fill the information correctly, you can't makes any
                changes later
              </SheetDescription>
            </SheetHeader>
            <EventForm />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Calender;
