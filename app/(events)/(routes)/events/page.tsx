import React from "react";
import Sidebar from "../../_components/sidebar";

import EventCal from "../../_components/calendar";
import EventDisplay from "../../_components/event-display";

const page = () => {
  return (
    <div className='px-10 flex'>
      <Sidebar />
      <EventDisplay />
      <EventCal />
    </div>
  );
};

export default page;
