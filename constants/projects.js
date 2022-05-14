import { selectedTheme } from "./utilities";

export const projects = [
  {
    id: 0,
    name: "portfolio",
    description:
      "This is my personal portfolio website." +
      " All of my personal projects, skills, and " +
      "information about me can be found here.",
    image: selectedTheme.projects.portfolio,
    tech: ["NextJS", "Bootstrap", "Firebase"],
    source: "https://github.com/Arabin1/my_portfolio",
    visit: "https://arabin.vercel.app",
  },
  {
    id: 1,
    name: "color_rating",
    description:
      "This is a copy project from the book " +
      '"Learning React" by Alex Banks and Eve Porcello. ' +
      "While reading the book, I did this project.",
    image: selectedTheme.projects.color_rating,
    tech: ["ReactJS", "Bootstrap", "Redux"],
    source: "",
    visit: "https://stormy-hamlet-01440.herokuapp.com/",
  },
  {
    id: 2,
    name: "hacker_news",
    description:
      "The project based on the book " +
      '"The road the learn react" written ' +
      "by Robin Wieruch. I built this" +
      " website while reading the book.",
    image: selectedTheme.projects.hacker_news,
    tech: ["ReactJS", "Bootstrap"],
    source: "",
    visit: "https://immense-castle-94650.herokuapp.com/",
  },
  {
    id: 3,
    name: "result_app",
    description:
      "An Android App. All results of my batch of " +
      "EEE Department, Rajshahi " +
      "University are available in this app.",
    image: selectedTheme.projects.results,
    tech: ["Java", "Firebase"],
    source: "https://github.com/Arabin1/ResultEEE",
    visit:
      "https://docs.google.com/uc?export=download&id=1A00x9LbKjOmRDqYdO0k1haLsR34_6aqE",
  },
  {
    id: 4,
    name: "snake_game",
    description:
      "It's a simple Snake Game. I made it for " +
      "learning purpose. This game allows three levels.",
    image: selectedTheme.projects.snake_game,
    tech: ["Java", "Firebase"],
    source: "https://github.com/Arabin1/Snake_Game_Android",
    visit:
      "https://docs.google.com/uc?export=download&id=1DDufJ2A8cUfyBKaauZbH0OrZa_gb9TIV",
  },
  {
    id: 5,
    name: "tic_tac_toe",
    description:
      "This is a simple Tic-Tac-Toe Game." +
      " I made it for learning purpose. You " +
      "can play against the computer or with another player.",
    image: selectedTheme.projects.tic_tac_toe,
    tech: ["Java", "Firebase"],
    source: "https://github.com/Arabin1/Tic-Tac-Toe",
    visit:
      "https://docs.google.com/uc?export=download&id=1CSqHteY8uotDMXDttxdnTQQcXM3gdZ3D",
  },
];
