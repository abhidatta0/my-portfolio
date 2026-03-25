import { Code2, Server, Package, Container } from "lucide-react";

export const TECH_STACK = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        name: "TypeScript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Motion",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      },
    ],
  },
  {
    category: "State Management",
    icon: Package,
    skills: [
      {
        name: "React Redux",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      },
      {
        name: "TanStack Query",
        img: "https://files.svgcdn.io/logos/react-query-icon.svg",
      },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Hono.js",
        img: "https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-title.png",
      },
      {
        name: "PostgreSQL",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "NeonDB",
        img: "https://avatars.githubusercontent.com/u/77690634?s=280&v=4",
      },
    ],
  },
  {
    category: "DevOps",
    icon: Container,
    skills: [
      {
        name: "Docker",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      },
      {
        name: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      },
    ],
  },
];
