export interface TermDate {
  term: string;
  startDate: string;
  endDate: string;
  halfTermStart?: string;
  halfTermEnd?: string;
  academicYear: string;
}

export const termDates: TermDate[] = [
  {
    term: "Autumn Term",
    startDate: "2024-09-09",
    endDate: "2024-12-13",
    halfTermStart: "2024-10-21",
    halfTermEnd: "2024-10-25",
    academicYear: "2024-2025",
  },
  {
    term: "Spring Term",
    startDate: "2025-01-06",
    endDate: "2025-04-04",
    halfTermStart: "2025-02-17",
    halfTermEnd: "2025-02-21",
    academicYear: "2024-2025",
  },
  {
    term: "Summer Term",
    startDate: "2025-04-22",
    endDate: "2025-07-18",
    halfTermStart: "2025-05-26",
    halfTermEnd: "2025-05-30",
    academicYear: "2024-2025",
  },
  {
    term: "Autumn Term",
    startDate: "2025-09-08",
    endDate: "2025-12-12",
    halfTermStart: "2025-10-20",
    halfTermEnd: "2025-10-24",
    academicYear: "2025-2026",
  },
  {
    term: "Spring Term",
    startDate: "2026-01-05",
    endDate: "2026-04-03",
    halfTermStart: "2026-02-16",
    halfTermEnd: "2026-02-20",
    academicYear: "2025-2026",
  },
  {
    term: "Summer Term",
    startDate: "2026-04-21",
    endDate: "2026-07-17",
    halfTermStart: "2026-05-25",
    halfTermEnd: "2026-05-29",
    academicYear: "2025-2026",
  },
];

export function getCurrentAcademicYear(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-12
  
  // Academic year runs from September to August
  if (month >= 9) {
    return `${year}-${year + 1}`;
  } else {
    return `${year - 1}-${year}`;
  }
}

export function getTermsForAcademicYear(academicYear: string): TermDate[] {
  return termDates.filter(term => term.academicYear === academicYear);
}

