import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Slighlys Network',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'Join Now – Adventure Awaits!',
                    1000,
                    'Play, Explore, Dominate!',
                    1000,
                    'Your Journey Starts Here!',
                    1000,
                    'Craft Your Legacy Today!',
                    1000,
                    'A....',
                    1000,
                    'A.... best server?',
                    1000,
                    "Ok...",
                    1000,
                    "Ok...  I'm running out of ideas...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... you can scroll down to play...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Seriously, my projects are really cool, go check them out!",
                    1000,
                    "You're uh...",
                    1000,
                    "You're uh... still here?",
                    1000,
                    "Ok, this has been fun, but I'm gonna restart the loop now...",
                    // 1000,
                    // "Or...",
                    // 1000,
                    // "Or... I could scroll you by force! Muahaha!",
                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
<ScrollAnimation animateIn="fadeIn">
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>

      </HeroContainer>
    </main>
  );
}

export default Hero;
