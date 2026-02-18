export interface FacultyMember {
  id: string;
  name: string;
  department: string;
  image?: string;
}

export const faculty: FacultyMember[] = [
  // Science Department
  { id: "1", name: "Mr. Zakari", department: "Science" },
  { id: "2", name: "Mr. Jude", department: "Science" },
  
  // Mathematics and ICT Department
  { id: "3", name: "Mr. Timileyin", department: "Mathematics and ICT" },
  { id: "4", name: "Mr. Chuks", department: "Mathematics and ICT" },
  { id: "5", name: "Mr. Abiodun", department: "Mathematics and ICT" },
  
  // Art and Humanities Department
  { id: "6", name: "Mr. Gabriel", department: "Art and Humanities" },
  { id: "7", name: "Mr. Mathew", department: "Art and Humanities" },
  { id: "8", name: "Mr. Micheal", department: "Art and Humanities" },
  { id: "9", name: "Mr. Muhammad", department: "Art and Humanities" },
  { id: "10", name: "Ms. Francissca", department: "Art and Humanities" },
  
  // Languages Department
  { id: "11", name: "Ms. Chinwe", department: "Languages" },
  { id: "12", name: "Mr. Rapheal", department: "Languages" },
  { id: "13", name: "Mr. Albert", department: "Languages" },
];

export const facultyByDepartment = {
  "Science": faculty.filter(f => f.department === "Science"),
  "Mathematics and ICT": faculty.filter(f => f.department === "Mathematics and ICT"),
  "Art and Humanities": faculty.filter(f => f.department === "Art and Humanities"),
  "Languages": faculty.filter(f => f.department === "Languages"),
};

