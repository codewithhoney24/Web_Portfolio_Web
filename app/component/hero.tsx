"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

function Hero() {
  return (
    <div>
      <section className="body-font bg-[#faede4]">
        <div className="container mx-auto flex px-2 py-52 md:flex-row flex-col items-center">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-yellow-950 title-font sm:text-4xl text-4xl mb-4 font-bold lg:ml-8">
              I am
              <br className="hidden lg:inline-block  gap-4" />
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Freelancer", "AI Enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[4px]  bg-yellow-950 lg:ml-8" />
            <p className="lg:ml-8 mb-8 mt-6 md:mt-10 leading-relaxed font-bold  text-xl text-gray-800">
              As a passionate student at <strong>GIAIC</strong>, I’ve built a strong foundation in <strong>HTML</strong>, <strong>CSS</strong>, <strong>TypeScript</strong>, <strong>Next.js</strong> and  <strong>Python</strong>. I&apos;m also diving into <strong>AI & agentic workflows</strong> to create smart, responsive web applications.
              <br /><br />
              I&apos;m actively available for <strong>freelance projects</strong> and <strong>open to job opportunities</strong> where I can bring innovative solutions, clean code, and a growth mindset to the team.
              <br /><br />
              Let&apos;s build powerful and visually appealing websites that solve real-world problems.
            </p>
            <div className="flex justify-center lg:ml-8">
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/nousheen-atif-7873a28a"
                className="text-yellow-950"
              >
                <button className="inline-flex text-white bg-yellow-950 border-0 py-2 px-6 focus:outline-none hover:bg-[#6b5d53] rounded text-lg">
                  LinkedIn
                </button>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/codewithhoney24/codewithhoney24.git"
                className="text-yellow-950"
              >
                <button className="ml-4 inline-flex text-yellow-950 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-[#918074] rounded text-lg">
                  GitHub
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[25rem]"
              src="/assests/picture/p001.jpg"
              alt="hero"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
