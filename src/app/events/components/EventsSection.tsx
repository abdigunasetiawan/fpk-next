"use client";

import { useEffect, useState } from "react";

import EventCard from "./EventCard";
import Decoration from "./Decoration";

import events from "@/json/events";

interface Event {
  id: number;
  type: string;
  img_path: string;
  description: string;
  title: string;
}

const EventsSection = () => {
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  useEffect(() => {
    setAllEvents(events.reverse());
  }, []);
  return (
    <section id="event">
      <div className="container mx-auto px-4 py-16 md:px-8 xl:px-16">
        <div className="flex items-center justify-center gap-8">
          <Decoration />
          <h2 className="event-heading text-center text-2xl font-bold">
            Kegiatan Yang Sudah Berakhir
          </h2>
          <Decoration />
        </div>

        <div className="card-event-container mt-9 flex flex-wrap gap-y-12 md:justify-between">
          {allEvents.map((event, index) => (
            <EventCard event={event} key={`${event.id}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
