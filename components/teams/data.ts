import henryImage from "./assets/henry.svg"

interface TeamMember {
  name: string
  title: string
  description: string
  imageSrc: string
  linkedinUrl: string
  color: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Caroline Mugo",
    title: "Team Lead and GIS Lead",
    description: "DataCraft Lab Team Lead",
    imageSrc:
      "https://github.com/Data-School-101/website/blob/8-events-page/components/teams/assets/mugo.jpg",
    linkedinUrl: "https://www.linkedin.com/in/emily-turner",
    color: "bg-purple-100 text-purple-700",
  },
  {
    name: "Henry Athiany",
    title: "Project Coordinator and Biostatistics Lead",
    description: "DataCraft Lab Project Coordinator",
    imageSrc: henryImage,
    linkedinUrl: "https://www.linkedin.com/in/henry-athiany-a755651b/",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Winnie Mbusiro Chacha",
    title: "Financial Modelling and Training Lead",
    description: "DataCraft Lab Training Lead",
    imageSrc:
      "https://github.com/Data-School-101/website/blob/8-events-page/components/teams/assets/winnie.jpg",
    linkedinUrl: "https://www.linkedin.com/in/dr-winnie-chacha-94946764/",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Charity Mkajuma",
    title: "Actuarial, Operations Research and Research Lead",
    description: "DataCraft Lab Research Lead",
    imageSrc: "",
    linkedinUrl: "https://www.linkedin.com/in/charity-wamwea-5122a471/",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Joseph Mungatu",
    title: "Statistics and Collaborations Lead",
    description: "DataCraft Lab Collaborations Lead",
    imageSrc:
      "https://github.com/Data-School-101/website/blob/8-events-page/components/teams/assets/mungatu.png",
    linkedinUrl: "https://www.linkedin.com/in/joseph-kyalo-mung-atu-98957570/",
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Rohi Anon",
    title: "Data Science",
    description: "DataCraft Lab Technical Lead",
    imageSrc:
      "https://github.com/Data-School-101/website/blob/8-events-page/components/teams/assets/rohi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/rohi-anon/",
    color: "bg-red-100 text-red-700",
  },
]
