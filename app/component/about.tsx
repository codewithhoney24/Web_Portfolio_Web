import React from "react";
import Image from "next/image";
import Link from "next/link";
import GirlImage from "../../public/assests/picture/girl001.jpg"; // Static import

function About() {
  return (
    <div id="About">
      <section className="bg-[#e9dcd3]">
        <div className="container mx-auto flex px-5 py-52 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto  w-[350px] h-[350px]"
              alt="hero"
              src={GirlImage} // Use static import
              width={350}
              height={350}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-yellow-950">
              About Me
            </h1>
            <p className="mb-4 leading-relaxed line-clamp-20 text-lg  font-medium text-yellow-950">
  As a passionate student at GIAIC and a freelance web developer, I specialize in creating modern, responsive, and user-focused web applications using HTML, CSS,  TypeScript, Next.js and python. I’ve successfully delivered impactful projects like dynamic student management systems, real-time currency converters, and interactive quizzes—all designed for performance and usability.

  Currently, I’m expanding my expertise into cutting-edge technologies, including Python and AI development. I’m actively learning Agentic AI through the Dapr Agentic Cloud Ascent (DACA) Design Pattern and exploring agent-native cloud platforms such as OpenAI Agents SDK, Memory, MCP, A2A, Knowledge Graphs, Dapr, Rancher Desktop, and Kubernetes.

  I am always open to freelance opportunities, remote work, and collaborative projects with startups and tech companies. Let’s connect and build intelligent, scalable digital solutions that make a difference!
</p>

            <div className="flex justify-center">
              <Link href="https://hackathon-milestones01-02-q7c5.vercel.app/">
                <button className="inline-flex text-white  bg-yellow-950 border-0 py-2 px-6 focus:outline-none hover:bg-[#6b5d53] rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
