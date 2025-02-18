import React from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

export default function AllEventPage() {
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  const events = getAllEvents();
  if (!events) {
    return <p>No Events Found..</p>;
  }

  return (
    <React.Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </React.Fragment>
  );
}
