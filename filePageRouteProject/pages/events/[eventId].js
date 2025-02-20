import React from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEventsById, getFeaturedEvents } from "../../helper/api-util";
import Head from "next/head";

export default function EventDetailPage(props) {
  // const event = getEventById(eventId);

  if (!props.event) {
    return <p className="center">Loading...</p>;
  }
  return (
    <React.Fragment>
      <Head>
        <title>{props.event.title}</title>
        <meta name="description" content={props.event.description} />
      </Head>
      <EventSummary title={props.event.title} />
      <EventLogistics
        date={props.event.date}
        address={props.event.location}
        image={props.event.image}
        imageAlt={props.event.title}
      />
      <EventContent>
        <p>{props.event.description}</p>
      </EventContent>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const eventDetail = await getEventsById(eventId);

  return {
    props: {
      event: eventDetail,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();

  const eventIds = allEvents.map((event) => event.id);

  const pathParams = eventIds.map((id) => ({ params: { eventId: id } }));
  return {
    paths: pathParams,
    fallback: true,

    // if i had fallback as false and we don't have pre-rendered data it throws an error so fallback should be true to specify that more data is there
  };
}
