import React from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

import { useRouter } from "next/router";
import { getAllEvents } from "../../helper/api-util";
import Head from "next/head";

export default function AllEventPage(props) {
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  const { events } = props;
  if (!events) {
    return <p>No Events Found..</p>;
  }

  return (
    <React.Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great event that allow you to evolve...."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}
