"use client";
import AboutInfo from "@/components/AboutInfo";
import ContactInfo from "./contact/ContactInfo";
import ExperienceInfo from "./(experience)/ExperienceInfo";
import { useState } from "react";
import Link from "next/link";
import { ArrowCircleDown } from "@phosphor-icons/react";
import IntervalLabel from "@/components/IntervalLabel";
import Carousel from "@/components/Carousel/Carousel";

const LABELS = [
  "Creative Developer",
  "Frontend Engineer",
  "Designer",
  "Photographer",
];

export default function Home() {
  const [projectButtonHover, setProjectButtonHover] = useState<boolean>(false);
  return (
    <main className="flex flex-col">
      <section id="intro" className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex flex-col justify-around">
          <div>
            <h5>Hi, I&apos;m</h5>
            <h1>Frank Wei</h1>
            <h3>
              <IntervalLabel labels={LABELS} />
            </h3>
          </div>
          <div>
            <button
              className="border-2 border-black leading-8
              dark:border-white rounded-sm p-4 hover:transition-colors
              hover:bg-orange-600 hover:border-orange-600 hover:text-orange-100
              hover:dark:bg-orange-600 hover:dark:border-orange-600 hover:dark:text-orange-100"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              <h5>
                Let&apos;s Connect{" "}
                <ArrowCircleDown className="inline-flex" size={32} />
              </h5>
            </button>
          </div>
        </div>
      </section>
      <section id="about">
        <h2>About</h2>
        <div className="mt-16">
          <AboutInfo />
        </div>
        {/* <div>
          <h3>Tooling</h3>
          <div className="grid grid-cols-7">
            <div>React</div>
            <div>NextJS</div>
            <div>Postgresql</div>
            <div>TRPC</div>
            <div>Gatsby</div>
          </div>
        </div> */}
        {/* <div>
          <div>Now Playing</div>
        </div> */}
      </section>
      <section id="experience" className="grid grid-cols-12">
        <h2 className="col-span-12">Experience</h2>
        <div className="col-span-12">
          <ExperienceInfo />
        </div>
        <div className="col-span-12 text-end">
          <Link
            className="hover:text-orange-600 hover:dark:text-orange-400 dark:bg-slate-500 bg-slate-200 bg-opacity-65 dark:bg-opacity-65 rounded-md p-2"
            href="/Portfolio"
          >
            View Full Resume
          </Link>
        </div>
      </section>
      <section id="projects" className="grid grid-cols-12">
        <h2 className="col-span-12">Projects</h2>
        <div className="col-span-10 col-start-2 overflow-hidden">
        <Carousel />
        </div>
        {/* <div className="col-span-12 text-end">
          <Link
            className="hover:text-orange-600 hover:dark:text-orange-400 dark:bg-slate-500 bg-slate-200 bg-opacity-65 dark:bg-opacity-65 
            rounded-md p-2 
            pointer-events-none opacity-65
            "
            href="/Portfolio"
            aria-disabled="true"
            onMouseOver={() => setProjectButtonHover(true)}
            onMouseOut={() => setProjectButtonHover(false)}
          >
            View All Projects (Coming Soon)
          </Link>
        </div> */}
      </section>
      <div id="additional">
        <h5>Website Todos:</h5>
        <ul className="ml-4">
          <li className="flex flex-row gap-2">
            <input type="checkbox" disabled />
            finish project card design
          </li>
          <li className="flex flex-row gap-2">
            <input type="checkbox" disabled />
            move data fetching to SSR/add more &apos;use client&apos; directives
          </li>
          <li className="flex flex-row gap-2">
            <input type="checkbox" disabled />
            add mail server for email form & captcha, s3 bucket for resume download
          </li>
          <li className="flex flex-row gap-2">
            <input type="checkbox" disabled />
            add framer motion/GSAP animations/more design work
          </li>
        </ul>
      </div>
    </main>
  );
}
