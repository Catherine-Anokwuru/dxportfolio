
import { nanoid } from "nanoid";
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const social = [
  {
    id: nanoid(),
    url: "https://github.com/Catherine-Anokwuru",
    icon: <FaGithub />,
    text: "Github",
  },
  {
    id: nanoid(),
    url: "https://www.linkedin.com/in/catherine-anokwuru",
    icon: <FaLinkedin />,
    text: "Linkedin",
  },
  {
    id: nanoid(),
    url: "https://wa.me/+2348056788338",
    icon: <FaWhatsapp />,
    text: "Whatsapp",
  },
];
