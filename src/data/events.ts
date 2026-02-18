export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: "Academic" | "Sports" | "Arts" | "Community" | "General";
  image?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Open Day 2024",
    date: "2024-04-20",
    time: "10:00 AM - 3:00 PM",
    location: "Main Campus",
    description: "Join us for our annual Open Day. Tour the facilities, meet teachers and students, and learn about our academic programs and extracurricular activities.",
    category: "General",
    image: "/images/events/open-day.jpg",
  },
  {
    id: "2",
    title: "Mathematics Olympiad",
    date: "2024-04-25",
    time: "9:00 AM - 12:00 PM",
    location: "Mathematics Department",
    description: "Annual Mathematics Olympiad competition for students in Years 7-12. Test your problem-solving skills and compete for prizes.",
    category: "Academic",
    image: "/images/events/math-olympiad.jpg",
  },
  {
    id: "3",
    title: "Inter-House Football Championship",
    date: "2024-05-05",
    time: "2:00 PM - 5:00 PM",
    location: "Sports Field",
    description: "The annual inter-house football championship. Watch as our four houses compete for the coveted trophy.",
    category: "Sports",
    image: "/images/events/football.jpg",
  },
  {
    id: "4",
    title: "Drama Production: 'The Tempest'",
    date: "2024-05-15",
    time: "6:00 PM - 8:30 PM",
    location: "School Theatre",
    description: "Our talented drama students present Shakespeare's 'The Tempest'. An evening of exceptional theatre and storytelling.",
    category: "Arts",
    image: "/images/events/drama.jpg",
  },
  {
    id: "5",
    title: "Career Fair 2024",
    date: "2024-05-22",
    time: "10:00 AM - 2:00 PM",
    location: "Main Hall",
    description: "Connect with professionals from various industries. Learn about career paths, university options, and future opportunities.",
    category: "Academic",
    image: "/images/events/career-fair.jpg",
  },
  {
    id: "6",
    title: "Community Clean-Up Day",
    date: "2024-06-01",
    time: "8:00 AM - 12:00 PM",
    location: "Local Community",
    description: "Join students and staff as we give back to our community through a day of environmental cleanup and beautification.",
    category: "Community",
    image: "/images/events/cleanup.jpg",
  },
  {
    id: "7",
    title: "Music Concert: Spring Recital",
    date: "2024-06-10",
    time: "7:00 PM - 9:00 PM",
    location: "School Theatre",
    description: "An evening of musical excellence featuring our orchestra, choir, and solo performers. Celebrate the talent of our music students.",
    category: "Arts",
    image: "/images/events/music-concert.jpg",
  },
  {
    id: "8",
    title: "Science Fair 2024",
    date: "2024-06-18",
    time: "9:00 AM - 3:00 PM",
    location: "Science Laboratories",
    description: "Students showcase their scientific projects and experiments. Explore innovative ideas and discoveries from our young scientists.",
    category: "Academic",
    image: "/images/events/science-fair.jpg",
  },
];

export function getUpcomingEvents(limit?: number): Event[] {
  const today = new Date().toISOString().split('T')[0];
  const upcoming = events
    .filter(event => event.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getEventsByCategory(category: Event['category']): Event[] {
  return events.filter(event => event.category === category);
}

export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id);
}

