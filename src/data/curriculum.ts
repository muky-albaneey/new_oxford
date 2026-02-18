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
  name: "Lower Secondary (Years 7-9)",
  description: "Our Lower Secondary program follows the Cambridge Lower Secondary framework, providing a broad and balanced curriculum that builds strong foundations across all subject areas. Students develop critical thinking skills, creativity, and a love for learning while preparing for Cambridge Checkpoint Examinations in Year 9.",
  ageRange: "Years 7-9",
  subjects: [
    {
      id: "mathematics",
      name: "Mathematics",
      description: "Building numerical fluency, problem-solving skills, and mathematical reasoning aligned with Cambridge Lower Secondary standards.",
    },
    {
      id: "english",
      name: "First Language English",
      description: "Developing strong communication skills, critical reading, and creative writing abilities.",
    },
    {
      id: "sciences",
      name: "Science",
      description: "Exploring the natural world through hands-on experiments and scientific inquiry covering Biology, Chemistry, and Physics.",
    },
    {
      id: "ict",
      name: "Information and Communication Technology (ICT)",
      description: "Developing digital literacy, computational thinking, and practical ICT skills.",
    },
    {
      id: "history",
      name: "History",
      description: "Understanding historical events, developments, and their impact on the modern world.",
    },
    {
      id: "geography",
      name: "Geography",
      description: "Exploring physical and human geography, environmental issues, and global perspectives.",
    },
    {
      id: "french",
      name: "French",
      description: "Developing proficiency in French language, communication, and cultural understanding.",
    },
    {
      id: "mandarin",
      name: "Mandarin Chinese",
      description: "Learning Mandarin Chinese language, characters, and cultural appreciation.",
    },
    {
      id: "music",
      name: "Music",
      description: "Fostering musical creativity, performance skills, and appreciation for various musical traditions.",
    },
    {
      id: "art",
      name: "Art and Design",
      description: "Developing artistic skills, creativity, and visual expression through various media and techniques.",
    },
    {
      id: "pe",
      name: "Physical Education (PE)",
      description: "Promoting physical fitness, teamwork, healthy lifestyles, and sports skills.",
    },
  ],
  highlights: [
    "Cambridge Lower Secondary curriculum framework",
    "Cambridge Checkpoint Examinations in Year 9",
    "Broad curriculum covering all core subjects",
    "Student-centred and inquiry-based teaching approach",
    "Regular assessments and progress tracking",
    "Foundation for Cambridge IGCSE preparation",
  ],
};

export const keyStage4: KeyStage = {
  id: "ks4",
  name: "Upper Secondary (Years 10-11) - Cambridge IGCSE",
  description: "Upper Secondary (Years 10-11) focuses on Cambridge IGCSE qualifications, providing internationally recognized qualifications that prepare students for A-Levels and university. Students study a combination of core and optional subjects, with external examinations in Year 11.",
  ageRange: "Years 10-11",
  subjects: [
    {
      id: "core-math",
      name: "Mathematics",
      description: "Comprehensive mathematical skills including algebra, geometry, statistics, and problem-solving.",
    },
    {
      id: "core-english",
      name: "First Language English",
      description: "Advanced language skills, literature analysis, and communication.",
    },
    {
      id: "core-sciences",
      name: "Science",
      description: "In-depth scientific knowledge and practical laboratory skills in Biology, Chemistry, and Physics.",
    },
    {
      id: "ict",
      name: "Information and Communication Technology (ICT)",
      description: "Advanced ICT skills, digital literacy, and technology applications.",
    },
    {
      id: "history",
      name: "History",
      description: "In-depth study of historical events, developments, and their global impact.",
    },
    {
      id: "geography",
      name: "Geography",
      description: "Comprehensive study of physical and human geography, environmental management, and global issues.",
    },
    {
      id: "sociology",
      name: "Sociology",
      description: "Understanding social structures, relationships, and contemporary social issues.",
    },
    {
      id: "env-mgmt",
      name: "Environmental Management",
      description: "Exploring environmental challenges, sustainability, and management strategies.",
    },
    {
      id: "global-perspectives",
      name: "Global Perspectives",
      description: "Developing critical thinking about global issues, perspectives, and solutions.",
    },
    {
      id: "french",
      name: "French",
      description: "Advanced French language proficiency, communication, and cultural understanding.",
    },
    {
      id: "mandarin",
      name: "Mandarin Chinese",
      description: "Advanced Mandarin Chinese language, characters, and cultural appreciation.",
    },
    {
      id: "literature",
      name: "Literature",
      description: "Critical analysis of literary texts, genres, and literary techniques.",
    },
    {
      id: "music",
      name: "Music",
      description: "Advanced musical performance, composition, and appreciation.",
    },
    {
      id: "art",
      name: "Art and Design",
      description: "Advanced artistic skills, creative expression, and portfolio development.",
    },
    {
      id: "pe",
      name: "Physical Education (PE)",
      description: "Advanced physical fitness, sports skills, and healthy lifestyle practices.",
    },
  ],
  highlights: [
    "Cambridge IGCSE qualifications recognized worldwide",
    "External examinations in Year 11",
    "Student-centred and inquiry-based teaching",
    "Emphasis on critical thinking and problem-solving",
    "Practical, experimental, and project-based learning",
    "Regular academic feedback to parents and students",
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

