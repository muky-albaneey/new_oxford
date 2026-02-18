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
    name: "Dr. Adebayo Okafor",
    role: "Principal",
    bio: "Dr. Okafor brings over 25 years of educational leadership experience, having served in prestigious institutions across Nigeria and the United Kingdom. He holds a PhD in Educational Leadership from the University of Cambridge and is passionate about creating inclusive learning environments that nurture both academic excellence and character development.",
    image: "/images/staff/principal.jpg",
    qualifications: ["PhD Educational Leadership (Cambridge)", "MEd Curriculum Development", "BSc Mathematics"],
    email: "principal@oxfordmanorcollege.edu.ng",
  },
  {
    id: "2",
    name: "Mrs. Chioma Nwosu",
    role: "Vice Principal (Academics)",
    bio: "Mrs. Nwosu oversees the academic curriculum and ensures the highest standards of teaching and learning. With a background in Science Education and extensive experience in curriculum design, she has been instrumental in developing our Cambridge and WAEC pathways.",
    image: "/images/staff/vp-academics.jpg",
    qualifications: ["MSc Science Education", "BSc Chemistry", "PGCE"],
    email: "vp.academics@oxfordmanorcollege.edu.ng",
  },
  {
    id: "3",
    name: "Mr. James Mitchell",
    role: "Vice Principal (Pastoral Care)",
    bio: "Mr. Mitchell leads our pastoral care team, ensuring the wellbeing and personal development of every student. His approach combines traditional British boarding school values with modern understanding of adolescent development and mental health.",
    image: "/images/staff/vp-pastoral.jpg",
    qualifications: ["MA Education (Oxford)", "PGCE", "Diploma in Child Psychology"],
    email: "vp.pastoral@oxfordmanorcollege.edu.ng",
  },
  {
    id: "4",
    name: "Dr. Funmi Adeyemi",
    role: "Head of Sixth Form",
    bio: "Dr. Adeyemi guides our Sixth Form students through their A-Level and university preparation journey. She has an exceptional track record of helping students gain admission to top universities worldwide, including Oxbridge and Ivy League institutions.",
    image: "/images/staff/head-sixth-form.jpg",
    qualifications: ["PhD English Literature", "MA Education", "BA English"],
    email: "sixthform@oxfordmanorcollege.edu.ng",
  },
];

