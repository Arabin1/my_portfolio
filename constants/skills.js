import {
  faReact,
  faBootstrap,
  faJava,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import { selectedTheme } from "./utilities";

export const skills = [
  {
    id: 0,
    name: "ReactJS",
    description:
      "I mainly work with react on the front-end where SEO isn't an issue.",
    icon: faReact,
    className: "ms-5",
  },
  {
    id: 1,
    name: "NextJS",
    description:
      "For the frontend I primarily use Next, where SEO is an important factor.",
    icon: selectedTheme.icons.next,
    className: "ms-5",
  },
  {
    id: 2,
    name: "Laravel",
    description:
      "I mostly use Laravel for the backend. It's my favorite backend framework.",
    icon: faLaravel,
    className: "ms-5",
  },
  {
    id: 3,
    name: "Bootstrap",
    description:
      "In my project, I primarily use bootstrap with react for styling.",
    icon: faBootstrap,
    className: "ms-bootstrap",
  },
  {
    id: 4,
    name: "Adobe XD",
    description:
      "I use this software to design user interfaces and to prototype my projects.",
    icon: selectedTheme.icons.xd,
    className: "ms-5",
  },
  {
    id: 5,
    name: "Java",
    description:
      "I used java for android" + " development. Currently not working on it.",
    icon: faJava,
    className: "ms-java",
  },
];
