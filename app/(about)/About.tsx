"use client";
import { motion } from "framer-motion";
import AboutInfo from "./AboutInfo";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section id="about">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        About
      </motion.h2>
      <div className="flex flex-row gap-8">
        <motion.div
          className="basis-2/3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex-1 text-sm md:text-base md:mt-auto h-fit pointer-events-none">
            <AboutInfo />
          </div>
        </motion.div>
        <motion.div
          className="basis-1/3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-full">
            <AboutImage />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
