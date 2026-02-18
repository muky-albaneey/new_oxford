export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  coverImage: string;
  author: string;
}

export const newsPosts: NewsPost[] = [
  {
    slug: "annual-sports-day-2024",
    title: "Annual Sports Day Celebrates Student Achievement",
    excerpt: "Oxford Manor College hosted its annual sports day with record participation and outstanding performances across all age groups.",
    content: "The Annual Sports Day 2024 was a resounding success, showcasing the athletic prowess and team spirit of our students. Over 500 students participated in various events including track and field, team sports, and traditional games. The event emphasized not just competition, but also sportsmanship, resilience, and community spirit. Parents, staff, and alumni gathered to cheer on the participants, creating an atmosphere of celebration and unity.",
    date: "2024-03-15",
    category: "Events",
    coverImage: "/images/news/game.jpg",
    author: "Sports Department",
  },
  {
    slug: "cambridge-exam-results-2024",
    title: "Outstanding Cambridge IGCSE Results Achieved",
    excerpt: "Students at Oxford Manor College achieve exceptional results in Cambridge IGCSE examinations, with 95% achieving A*-C grades.",
    content: "We are delighted to announce that our students have achieved outstanding results in the Cambridge IGCSE examinations. This year, 95% of our students achieved A*-C grades, with 40% achieving A* or A grades. These results reflect the dedication of both our students and teaching staff, as well as our commitment to academic excellence. Subjects such as Mathematics, Sciences, and English Literature showed particularly strong performance.",
    date: "2024-02-28",
    category: "Academics",
    coverImage: "/images/news/igce-1.jpg",
    author: "Academic Office",
  },
  {
    slug: "new-science-laboratory-opens",
    title: "State-of-the-Art Science Laboratory Opens",
    excerpt: "Oxford Manor College unveils its new £500,000 science laboratory facility, equipped with the latest technology for enhanced learning.",
    content: "We are thrilled to announce the opening of our new state-of-the-art science laboratory. This £500,000 investment provides our students with access to cutting-edge equipment and facilities that rival those at leading universities. The laboratory features dedicated spaces for Chemistry, Physics, and Biology, with modern safety systems and interactive learning technologies. This facility will enable our students to conduct advanced experiments and develop practical scientific skills.",
    date: "2024-02-10",
    category: "Facilities",
    coverImage: "/images/lab.jpeg",
    author: "Facilities Team",
  },
  {
    slug: "student-leadership-conference",
    title: "Student Leadership Conference Inspires Future Leaders",
    excerpt: "Over 200 students from across Nigeria gathered at Oxford Manor College for the annual Student Leadership Conference.",
    content: "The Student Leadership Conference brought together over 200 students from schools across Nigeria to develop leadership skills and discuss important issues facing young people today. The conference featured workshops on public speaking, project management, ethical leadership, and community service. Guest speakers included successful alumni, business leaders, and community activists. Students left inspired and equipped with practical tools to make a positive impact in their communities.",
    date: "2024-01-22",
    category: "Student Life",
    coverImage: "/images/news/leadership-conference.jpg",
    author: "Student Affairs",
  },
  {
    slug: "art-exhibition-showcases-talent",
    title: "Annual Art Exhibition Showcases Student Creativity",
    excerpt: "The school's annual art exhibition displayed over 300 pieces of student artwork, celebrating creativity and artistic expression.",
    content: "Our annual art exhibition was a vibrant celebration of student creativity, featuring over 300 pieces of artwork across various mediums including painting, sculpture, digital art, and photography. The exhibition attracted hundreds of visitors including parents, alumni, and members of the local arts community. Several pieces were selected for regional competitions, and two students received scholarships to prestigious art programs. The event highlighted the importance of arts education in developing well-rounded individuals.",
    date: "2024-01-08",
    category: "Arts",
    coverImage: "/images/news/art-exhibition.jpg",
    author: "Arts Department",
  },
  {
    slug: "community-service-initiative",
    title: "Students Launch Community Service Initiative",
    excerpt: "Oxford Manor College students launch a new community service program, partnering with local organizations to make a difference.",
    content: "Our students have launched an ambitious community service initiative that partners with local organizations to address key social issues. The program includes tutoring sessions for underprivileged children, environmental cleanup projects, and support for elderly community members. Over 150 students have volunteered their time, demonstrating our school's commitment to developing not just academic excellence, but also character and social responsibility. The initiative has already made a significant positive impact in our local community.",
    date: "2023-12-15",
    category: "Community",
    coverImage: "/images/news/community-service.jpg",
    author: "Community Engagement Office",
  },
];

export function getNewsByCategory(category: string): NewsPost[] {
  return newsPosts.filter(post => post.category === category);
}

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find(post => post.slug === slug);
}

