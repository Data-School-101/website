import henryImage from "./assets/henry.svg"

interface TeamMember {
  name: string
  title: string
  description: string
  imageSrc: string
  linkedinUrl: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Caroline Mugo",
    title: "Team Lead and GIS Lead",
    description: "DataCraft Lab Team Lead",
    imageSrc: "",
    linkedinUrl: "https://www.linkedin.com/in/emily-turner",
  },
  {
    name: "Henry Athiany",
    title: "Project Coordinator and Biostatistics Lead",
    description: "DataCraft Lab Project Coordinator",
    imageSrc: henryImage,
    linkedinUrl: "https://www.linkedin.com/in/henry-athiany-a755651b/",
  },
  {
    name: "Winnie Mbusiro Chacha",
    title: "Financial Modelling and Training Lead",
    description: "DataCraft Lab Training Lead",
    imageSrc: "",
    linkedinUrl: "https://www.linkedin.com/in/dr-winnie-chacha-94946764/",
  },
  {
    name: "Charity Mkajuma",
    title: "Actuarial, Operations Research and Research Lead",
    description: "DataCraft Lab Research Lead",
    imageSrc: "",
    linkedinUrl: "https://www.linkedin.com/in/charity-wamwea-5122a471/",
  },
  {
    name: "Joseph Mungatu",
    title: "Statistics and Collaborations Lead",
    description: "DataCraft Lab Collaborations Lead",
    imageSrc: "",
    linkedinUrl: "https://www.linkedin.com/in/joseph-kyalo-mung-atu-98957570/",
  },
]
