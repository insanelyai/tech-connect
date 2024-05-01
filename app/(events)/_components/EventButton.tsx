import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const EventButton = ({ linktag }: { linktag: string }) => {
  return (
    <Button size={"lg"} asChild>
      <Link href={"#"}>{linktag}</Link>
    </Button>
  );
};

export default EventButton;
