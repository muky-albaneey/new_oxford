import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Event } from "@/src/data/events";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.date);
  const isPast = eventDate < new Date();

  return (
    <div
      className={`rounded-lg border-2 bg-white p-6 shadow-md transition-all hover:shadow-lg ${isPast ? "opacity-60" : ""}`}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <div className="mb-1 text-sm font-semibold text-brand-accent">
            {event.category}
          </div>
          <h3 className="mb-2 font-serif text-xl font-bold text-brand-primary">
            {event.title}
          </h3>
        </div>
        {isPast && (
          <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-600">
            Past
          </span>
        )}
      </div>

      <p className="mb-4 text-gray-600 line-clamp-2">{event.description}</p>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-brand-accent" />
          <time dateTime={event.date}>
            {eventDate.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-brand-accent" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand-accent" />
          <span>{event.location}</span>
        </div>
      </div>
    </div>
  );
}

