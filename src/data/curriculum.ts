export interface Subject {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface KeyStage {
  id: string;
  name: string;
  description: string;
  ageRange: string;
  subjects: Subject[];
  highlights: string[];
}

export const keyStage3: KeyStage = {
  id: "ks3",
  name: "Key Stage 3",
  description: "Our Key Stage 3 program (Years 7-9) provides a broad and balanced curriculum that builds strong foundations across all subject areas. Students develop critical thinking skills, creativity, and a love for learning while exploring a wide range of disciplines.",
  ageRange: "11-14 years",
  subjects: [
    {
      id: "english",
      name: "English Language & Literature",
      description: "Developing strong communication skills, critical reading, and creative writing abilities.",
    },
    {
      id: "mathematics",
      name: "Mathematics",
      description: "Building numerical fluency, problem-solving skills, and mathematical reasoning.",
    },
    {
      id: "sciences",
      name: "Sciences (Biology, Chemistry, Physics)",
      description: "Exploring the natural world through hands-on experiments and scientific inquiry.",
    },
    {
      id: "languages",
      name: "Modern Foreign Languages",
      description: "French, Spanish, or Mandarin - developing global communication skills.",
    },
    {
      id: "humanities",
      name: "Humanities (History, Geography, Religious Studies)",
      description: "Understanding the world, its history, cultures, and belief systems.",
    },
    {
      id: "arts",
      name: "Creative Arts (Art, Music, Drama)",
      description: "Fostering creativity, self-expression, and appreciation for the arts.",
    },
    {
      id: "technology",
      name: "Design & Technology",
      description: "Developing practical skills in design, engineering, and technology.",
    },
    {
      id: "pe",
      name: "Physical Education",
      description: "Promoting physical fitness, teamwork, and healthy lifestyles.",
    },
  ],
  highlights: [
    "Broad curriculum covering all core subjects",
    "Small class sizes (maximum 20 students)",
    "Regular assessments and progress tracking",
    "Enrichment activities and educational trips",
    "Foundation for IGCSE preparation",
  ],
};

export const keyStage4: KeyStage = {
  id: "ks4",
  name: "Key Stage 4 (IGCSE)",
  description: "Key Stage 4 (Years 10-11) focuses on Cambridge IGCSE qualifications, providing internationally recognized qualifications that prepare students for A-Levels and university. Students study a combination of core and optional subjects, allowing them to begin specializing in areas of interest.",
  ageRange: "14-16 years",
  subjects: [
    {
      id: "core-english",
      name: "English (First Language or Second Language)",
      description: "Advanced language skills, literature analysis, and communication.",
    },
    {
      id: "core-math",
      name: "Mathematics",
      description: "Comprehensive mathematical skills including algebra, geometry, and statistics.",
    },
    {
      id: "core-sciences",
      name: "Sciences (Biology, Chemistry, Physics - separate or combined)",
      description: "In-depth scientific knowledge and practical laboratory skills.",
    },
    {
      id: "optional-humanities",
      name: "Humanities (History, Geography, Economics, Business Studies)",
      description: "Choose from various humanities subjects based on interest.",
    },
    {
      id: "optional-languages",
      name: "Modern Foreign Languages",
      description: "Continue or begin new language studies.",
    },
    {
      id: "optional-arts",
      name: "Creative & Technical Subjects",
      description: "Art, Music, Drama, Design & Technology, Computer Science, ICT.",
    },
  ],
  highlights: [
    "Cambridge IGCSE qualifications recognized worldwide",
    "Flexible subject choices to match interests and career goals",
    "Expert teaching from qualified Cambridge-trained educators",
    "Regular mock examinations and assessment",
    "University and career guidance begins",
    "Strong track record: 95% A*-C grades",
  ],
};

export const sixthForm: KeyStage = {
  id: "sixth-form",
  name: "Sixth Form (A-Levels)",
  description: "Our Sixth Form (Years 12-13) offers Cambridge International A-Levels, providing rigorous academic preparation for university. Students typically study 3-4 A-Level subjects in depth, allowing for specialization while maintaining breadth. We also offer WAEC A-Levels for students pursuing Nigerian universities.",
  ageRange: "16-18 years",
  subjects: [
    {
      id: "sciences",
      name: "Sciences",
      description: "Mathematics, Further Mathematics, Physics, Chemistry, Biology, Computer Science.",
    },
    {
      id: "humanities",
      name: "Humanities & Social Sciences",
      description: "History, Geography, Economics, Business Studies, Psychology, Sociology.",
    },
    {
      id: "languages",
      name: "Languages & Literature",
      description: "English Literature, French, Spanish, Literature in English.",
    },
    {
      id: "arts",
      name: "Creative Arts",
      description: "Art & Design, Music, Drama & Theatre Studies.",
    },
  ],
  highlights: [
    "Cambridge International A-Levels (recognized by top universities globally)",
    "WAEC A-Levels also available",
    "Small tutorial groups for personalized attention",
    "University application support (UCAS, Common App, etc.)",
    "Extended Project Qualification (EPQ) available",
    "Leadership opportunities and prefect roles",
    "Strong university placement record (Oxbridge, Ivy League, top Nigerian universities)",
    "Career mentoring and work experience programs",
  ],
};

export const allKeyStages: KeyStage[] = [keyStage3, keyStage4, sixthForm];

