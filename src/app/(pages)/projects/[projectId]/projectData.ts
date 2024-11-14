type ProjectData = {
  [key: string]: {
    images: string[];
    title: string;
    content: string;
    color: string | undefined;
    icons: string[] | undefined;
    link: string | undefined;
    githubLink: string | undefined;
  };
};

export const projectData: ProjectData = {
  clira: {
    images: ["/clira/image61.png", "/clira/clira123.jpg"],
    title: "Clira",
    content:
      "Clira is a startup focused on transforming the procurement landscape by streamlining processes through advanced web technology. With a focus on both public and private procurements, Clira’s mission is to maximize competition while minimizing corruption. During my 8-month internship, I contributed to the platform by building features with a modern tech stack, including Laravel, React, Next.js, and Docker. For my final project at Clira, I developed an inventory feature based on a provided design, enabling customers to manage their stock more efficiently. This experience strengthened my skills in both frontend and backend development and taught me how to navigate a professional environment, enhancing my ability to work both collaboratively and independently as a programmer. If you are still greeted by an AI-picture when clicking the link below, I apologize in advance.",
    color: "clira-pink",
    icons: ["Next.js", "React", "Laravel", "Docker", "AWS"],
    link: "https://www.clira.io/",
    githubLink: "",
  },
  game: {
    images: [
      "/game/snappyblock1.png",
      "/game/snappyblock2.png",
      "/game/snappyblock3.png",
      "/game/snappyblock-start.jpg",
    ],
    title: "Snappyblock",
    content: "Matter js, React native for mobile use, mobile game, javascript.",
    color: "snappy-yellow",
    icons: ["React Native", "Matter.js", "Javascript"],
    link: "",
    githubLink: "https://github.com/risinger7/Snappy-block",
  },
  rejoi: {
    images: ["/clira/image61.png", "/clira/clira123.jpg"],
    title: "Rejoi",
    content: "",
    color: "rejoi-blue",
    icons: ["Next.js", "React", "Laravel", "Docker", "AWS"],
    link: "",
    githubLink: "https://github.com/risinger7/Snappy-block",
  },

  firstwebsite: {
    images: [
      "/remote/remote-persp-back.jpg",
      "/remote/remote-side.jpg",
      "/remote/remote-front.jpg",
      "/remote/remote-corner.jpg",
      "/remote/remote-persp-front.jpg",
    ],
    title: "Remote",
    content: "Text om Remote here",
    color: "",
    icons: [],
    link: "",
    githubLink: "",
  },
  phone: {
    images: [
      "/phone/phone-side.jpg",
      "/phone/phone-persp.jpg",
      "/phone/phone-back.jpeg",
      "/phone/phone-back2.jpg",
      "/phone/phone-front.jpg",
    ],
    title: "Phone",
    content: "Text om phone here",
    color: "",
    icons: [],
    link: "",
    githubLink: "",
  },
  remote: {
    images: [
      "/remote/remote-persp-back.jpg",
      "/remote/remote-side.jpg",
      "/remote/remote-front.jpg",
      "/remote/remote-corner.jpg",
      "/remote/remote-persp-front.jpg",
    ],
    title: "Remote",
    content: "Text om Remote here",
    color: "",
    icons: [],
    link: "",
    githubLink: "",
  },
};