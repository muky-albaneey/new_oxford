import Layout from "@/src/components/Layout";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import SectionHeading from "@/src/components/SectionHeading";
import EventCard from "@/src/components/EventCard";
import { events, getUpcomingEvents } from "@/src/data/events";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "View upcoming events, activities, and important dates at Oxford Manor College.",
};

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = events
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Layout>
      <Breadcrumbs items={[{ label: "Events" }]} />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Events & Activities"
            subtitle="Join us for exciting events throughout the academic year"
          />
          
          {upcomingEvents.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-8 font-serif text-3xl font-bold text-brand-primary">
                Upcoming Events
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {pastEvents.length > 0 && (
            <div>
              <h2 className="mb-8 font-serif text-3xl font-bold text-brand-primary">
                Past Events
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

