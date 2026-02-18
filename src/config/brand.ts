export const brandConfig = {
  name: "Oxford Manor College",
  shortName: "OMC",
  motto: "Raising an indomitable generation",
  tagline: "Raising an indomitable generation",
  established: 2013,
  location: "Abuja, Nigeria",
  
  contact: {
    address: "No. 9, Magaji Muazu Crescent, Katampe Extension, Abuja, Nigeria",
    phone: "+234 817 606 7809",
    phoneSecondary: "+234 810 031 7281",
    email: "omcabuja@gmail.com",
    admissionsEmail: "omcabuja@gmail.com",
  },
  
  social: {
    instagram: "https://instagram.com/oxfordmanorabuja",
    tiktok: "https://tiktok.com/@oxfordmanorabuja",
  },
  
  schoolHours: {
    start: "7:00 AM",
    end: "3:30 PM",
    display: "7:00 AM – 3:30 PM",
  },
  
  colors: {
    primary: "#728639", // OMC Primary - Olive green
    secondary: "#5a6b2d", // Darker olive green
    accent: "#d4af37", // Gold
    accentLight: "#f4e4bc", // Light gold
    dark: "#0f172a", // Initial dark blue/navy (for headers/hero backgrounds)
    light: "#f8fafc", // Off-white
  },
  
  logo: {
    svg: "/images/omc_logo.jpeg",
    png: "/images/omc_logo.jpeg",
    jpeg: "/images/omc_logo.jpeg",
  },
} as const;

