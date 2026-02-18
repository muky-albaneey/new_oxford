export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
  email?: string;
}

export const leadership: StaffMember[] = [
  {
    id: "1",
    name: "Mr. David Nwachukwu",
    role: "Head of School",
    bio: "Mr. David Nwachukwu leads Oxford Manor College with a commitment to academic excellence and holistic student development. Under his leadership, the school continues to provide world-class British-style education in Abuja.",
    image: "/images/staff/head-of-school.jpg",
    qualifications: [],
    email: "omcabuja@gmail.com",
  },
  {
    id: "2",
    name: "Mr. Matthew Ikwocha",
    role: "Vice Principal (Academics)",
    bio: "Mr. Matthew Ikwocha oversees the academic curriculum and ensures the highest standards of teaching and learning. He is responsible for implementing the Cambridge International Education framework and maintaining academic excellence across all year groups.",
    image: "/images/staff/vp-academics.jpg",
    qualifications: [],
    email: "omcabuja@gmail.com",
  },
  {
    id: "3",
    name: "Ms. Hauwa Santali",
    role: "Vice Principal (Pastoral)",
    bio: "Ms. Hauwa Santali leads our pastoral care team, ensuring the wellbeing and personal development of every student. She oversees the House Point System, form tutoring, and provides counselling services to support student welfare.",
    image: "/images/staff/vp-pastoral.jpg",
    qualifications: [],
    email: "omcabuja@gmail.com",
  },
  {
    id: "4",
    name: "Mr. Mba Wilson David",
    role: "Administrator",
    bio: "Mr. Mba Wilson David manages the administrative operations of the school, ensuring smooth day-to-day functioning and supporting the school's mission of providing exceptional education.",
    image: "/images/staff/administrator.jpg",
    qualifications: [],
    email: "omcabuja@gmail.com",
  },
];

