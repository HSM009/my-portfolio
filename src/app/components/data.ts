import { Linkedin, Github, Facebook, Twitter } from "lucide-react";

export const introductionBody: string =
  "A highly focused and motivated person looking for more challenging opportunities as a developer. A very fast learner and has broad grasp of knowledge in programming languages and its snags.";

export const contactDetails = {
  phone: "+92-319-7726772",
  email: "hoseinsirat@gmail.com",
  LinkedIn: "img https://www.linkedin.com/in/hosein-sirat-mohammad-5a05a0142/",
  Github: "img https://github.com/HSM009",
  Facebook: "img #",
};

export const componentKeyMap: { [key: string]: React.ComponentType<any> } = {
  LinkedIn: Linkedin,
  Github: Github,
  Facebook: Facebook,
};
