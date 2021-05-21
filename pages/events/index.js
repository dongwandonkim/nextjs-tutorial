import React from 'react';
import { getAllEvents, getFilteredEvents } from '../../dummy-data';
import { useRouter } from 'next/router';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/event-search';

export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}
