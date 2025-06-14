import { Box } from "@mui/material";
import { Hero } from "./components/Hero";
import { OurStory } from "./components/OurStory";
import { Spacer } from "../../components/layout/Spacer";
import { WhatWeHave } from "./components/WhatWeHave";
import { Social } from "./components/Social";
import { Contact } from "../contact/Contact";

export const Home = () => {
  return (
    <Box>
      <Hero />
      <OurStory />
      <Spacer imageUrl="https://picsum.photos/1920/540" />
      <WhatWeHave />
      <Social />
      <Contact />
    </Box>
  );
};
