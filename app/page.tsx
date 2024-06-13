"use client";
import AboutInfo from "@/app/(about)/AboutInfo";
import ExperienceInfo from "./(experience)/ExperienceInfo";
import Link from "next/link";
import {
  ArrowCircleDown,
  ArrowUpRight,
  EnvelopeSimple,
  Moon,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import IntervalLabel from "@/components/IntervalLabel";
import ProjectInfo from "./(projects)/ProjectInfo";
import { useEffect, useRef, useState } from "react";
import { toggleDarkMode } from "@/public/scripts/darkMode";
import { Sun, Sunglasses, House } from "@phosphor-icons/react";
import ContactInfo from "./(contact)/ContactInfo";
import { motion } from "framer-motion";
import Parallax from "@/components/Parallax";
import Email from "./(contact)/Email";
import AboutImage from "./(about)/AboutImage";
import { Button } from "@/components/MovingBorder";
import { Typewriter, TypewriterSmooth } from "@/components/Typewriter";
import { Tabs } from "@/components/Tabs";
import ExperienceInfoTabs from "./(experience)/ExperienceInfoTabs";
import { Boxes } from "@/components/Boxes";
import { TextSequenceEffect } from "@/components/TextSequence";

const LABELS = ["Software Developer", "Designer", "Photographer"];

export default function Home() {
  const [darkState, setDarkState] = useState<boolean>(false);

  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkState(true);
    } else {
      setDarkState(false);
    }
  }, []);

  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      {/* <Background/> */}
      <section
        id="home"
        className="grid grid-cols-2 auto-rows-min md:auto-rows-auto"
      >
        <div className="col-span-2 md:col-span-1  md:my-auto">
          <div className="">
            <Typewriter
              className="text-left text-lg md:text-xl flex items-start"
              cursorClassName="hidden"
              words={[{ text: "Hi" }, { text: "," }, { text: "I'm" }]}
            />
            <TextSequenceEffect
              words="Frank Wei"
              className="text-6xl md:text-8xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg md:text-xl"
          >
            <IntervalLabel labels={LABELS} />
          </motion.div>
        </div>
        <div className="col-span-2 md:col-span-1 mt-32 md:my-auto mx-auto">
          <motion.button
            // drag
            aria-label="dark mode toggle"
            className="button-icon hover:text-theme-hover group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.2, transition: { y: 6 } }}
            onClick={() => {
              toggleDarkMode();
              setDarkState(!darkState);
            }}
          >
            {!!darkState ? (
              <Sun
                size={"20rem"}
                // className="group-hover:animate-bounce ease-in-out"
              />
            ) : (
              <Moon
                size={"20rem"}
                // className="group-hover:animate-bounce ease-in-out"
              />
            )}
          </motion.button>
        </div>
      </section>

      <Parallax>
        <section
          id="about"
          className="grid gap-x-16 grid-cols-1 md:grid-cols-5
        [grid-template-areas:'title'_'image'_'bio'_'playlist']
        md:[grid-template-areas:'title_title_title_playlist_playlist'_'bio_bio_bio_image_image'] auto-rows-min md:auto-rows-auto"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="[grid-area:title]"
          >
            About
          </motion.h2>
          {/* <motion.div
            className="[grid-area:playlist] mt-8 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-full h-40 border">Now Playing</div>
          </motion.div> */}
          <motion.div
            className="flex flex-row flex-wrap-reverse md:flex-nowrap gap-x-16
               [grid-area:bio]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="text-sm md:text-base md:mt-auto h-fit pointer-events-none">
              <AboutInfo />
            </div>
          </motion.div>
          <motion.div
            className="mt-auto [grid-area:image] flex flex-col justify-between gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-full">
              <AboutImage />
            </div>
          </motion.div>
        </section>
      </Parallax>
      <Parallax>
        <section id="experience">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Experience
          </motion.h2>
          <div className="flex flex-col justify-around gap-4">
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Work
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <ExperienceInfo />
                {/* <ExperienceInfoTabs/> */}
                {/* <div className="text-end mt-16">
                  <Link
                    className="hover:text-orange-600 hover:dark:text-orange-400 dark:bg-base-300 bg-base-200 bg-opacity-65 dark:bg-opacity-65 
            text-sm md:text-base rounded-md p-2 
            pointer-events-none opacity-65 dark:opacity-65"
                    href="/Portfolio"
                  >
                    View Full Resume (coming soon)
                  </Link>
                </div> */}
              </motion.div>
            </div>
            <div className="mt-16">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Projects
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <ProjectInfo />
              </motion.div>
            </div>
          </div>
        </section>
      </Parallax>
      <Parallax>
        <section id="contact" className="flex flex-col" ref={contactRef}>
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="z-20 bg-base-100 dark:bg-base-400 w-fit bg-opacity-80 dark:bg-opacity-80"
          >
            Let&apos;s Connect!
          </motion.h4>
          <Typewriter
            className="text-left text-2xl md:text-3xl flex items-start font-bold z-20 bg-base-100 dark:bg-base-400 w-fit bg-opacity-80 dark:bg-opacity-80"
            words={[
              { text: "Reach" },
              { text: "out" },
              { text: "to" },
              { text: "me" },
              { text: "at:" },
            ]}
          />

          <motion.div className="grow flex flex-col">
            <Link
              href={`mailto:${Email().email}`}
              // className="border-b w-fit ml-auto self-end mt-auto mb-32 hover:anchor-hover text-theme border-theme hover:text-theme-hover"
              className="w-fit ml-auto self-end mt-auto mb-32 z-20 "
              passHref
            >
              <Button className="bg-base-100 dark:bg-base-400 rounded-md text-theme hover:anchor-hover hover:text-theme-hover bg-opacity-80 dark:bg-opacity-80">
                <div className="p-2 flex items-center">
                  <EnvelopeSimple size={32} className="inline p-1" />
                  <h3 className="inline mb-0 ">{Email().email}</h3>
                </div>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            dragConstraints={contactRef}
            dragMomentum={false}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            drag
            className="bg-base-200 dark:bg-base-300 p-2 w-fit rounded-md cursor-move z-20 bg-opacity-80 dark:bg-opacity-80"
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            drag
            dragConstraints={contactRef}
            className="cursor-move invisible md:visible"
          >
            <Boxes darkState={darkState} />
          </motion.div>
        </section>
      </Parallax>
    </main>
  );
}
