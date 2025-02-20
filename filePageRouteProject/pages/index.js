import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helper/api-util";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
        <meta
          name="description"
          content="Find a lot of great event that allow you to evolve...."
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
