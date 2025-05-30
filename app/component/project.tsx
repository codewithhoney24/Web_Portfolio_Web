import Link from "next/link";
import React from "react";
import Image from "next/image";

function Project() {
  return (
    <div id="Project">
      <section className="bg-[#b6a396] body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="lg::text-2xl sm:text-4xl font-extrabold title-font mb-4 text-yellow-950">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-yellow-950">
              Explore a range of innovative dynamic projects and each project
              leverages modern modules libraries and frameworks for an
              intuitive, user-friendly experience. Designed for efficiency and
              ease these tools showcase powerful functionality in sleek
              interactive interfaces!
            </p>
          </div>
          <div className="flex flex-wrap -mt-[3rem]" >
            {/* project 1 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 ">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src="/assests/project/mon.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                    Smart Earning Tool
                  </h2>
                  <h1 className="title-font text-xl font-extrabold text-yellow-950">
                     Money-Making Machine
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                    A Money-Making Machine built with Python that generates random side hustles and money quotes using FastAPI!...
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://money-making-machine-jvaeosdfegjuebpudoxz2w.streamlit.app/"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 2 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/secu01.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                    Secure Data Protection
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                    Secure Data Encryption System 
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                   Welcome to your Secure Data Encryption System – a powerful and user-friendly platform designed to protect your sensitive information with advanced encryption techniques...
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://class-projects-python-kpb6nmdmbcv26qqvkzyyof.streamlit.app/"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project 3 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative " >
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/oop.jpg"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5  relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                    User-Interface
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                    Oop My Bank
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                    The My Bank TypeScript project uses Object-Oriented Programming (OOP) to create a streamlined banking system with a user-friendly interface...
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/codewithhoney24/Oop-My-bank.git"}
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

              {/* project 4 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/fig01.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                    UI/UX Showcase
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                    Figma Portfolio 
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                    Crafting a sleek, Figma-designed portfolio with Next.js to bring creativity and skills to life online...
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://github.com/codewithhoney24/Todo-App-next.js.git"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

              {/* project 5 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/mil01.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                  Milestone-5 Hackathon
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                    Resume Builder
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                    Built a resume using HTML, CSS, and TypeScript, showcasing skills and experience with clean design and Unique Path and Shareable Link....
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://milestone5-hackathon.vercel.app/"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>

              {/* project 6 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/hack001.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                  Development Insight
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                   eCommerce Website
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                   🚀 Crafting innovative eCommerce experiences using Next.js and Tailwind CSS — I designed and developed cutting-edge online shopping features, focusing on performance, responsiveness, and user-centric design. This project showcases modern UI/UX practices and scalable architecture to elevate the digital shopping journey...
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://vercel.com/nousheen-atif/hackathon-e-commerce"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>


              {/* project 7 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/password.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                  Security Utility
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                    Password Generator
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                   A Streamlit-based Password Generator that creates strong, secure passwords with customizable length and character options. 🔐...
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://password-generator-app-bgmwylbknjhhtzc25qpczf.streamlit.app/"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>


              {/* project 8 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/library.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                    Smart Management Features
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                   Library Manager
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                   A Python-based library management system for organizing and tracking books efficiently. 📚...
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://librarymanagementapp-wfkvzdpcddtvnquqrt3icw.streamlit.app/"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>


              {/* project 9 */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/assests/project/chain01.png"
                  width={500}
                  height={500}
                />
                <div className="px-8 py-5 relative z-10 w-full border-4 border-yellow-950 bg-[#d4baa7] opacity-0 hover:opacity-100">
                  <h2 className=" ml-1 tracking-widest text-xl title-font font-bold text-yellow-950">
                    AI-Powered Interfaces
                  </h2>
                  <h1 className="title-font text-2xl font-extrabold text-yellow-950">
                    Chat-bot
                  </h1>
                  <p className="leading-relaxed text-yellow-950 line-clamp-2">
                    A stateful chatbot with OAuth authentication built using Python and Chainlit....
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://github.com/codewithhoney24/stateful-chatbot-OAuth.git"
                    }
                  >
                    <p className="leading-relaxed text-yellow-950 font-extrabold hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
{/* More Projects, Vercel, Streamlit, and Chainlit Buttons */}
<div className="flex justify-center flex-wrap gap-4 mt-10">
  <Link
    href="https://github.com/codewithhoney24"
    target="_blank"
    className="bg-yellow-950 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-800"
  >
    More Projects on GitHub
  </Link>
  <Link
    href="https://vercel.com/nousheen-atif"
    target="_blank"
    className="text-yellow-950 bg-gray-100 border-0 py-3 px-6 focus:outline-none hover:bg-[#918074] rounded-lg font-bold"
  >
    View Project on Vercel
  </Link>
  <Link
    href="https://share.streamlit.io/"
    target="_blank"
    className="bg-yellow-950 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-800"
  >
    View on Streamlit
  </Link>
  <Link
    href="https://github.com/codewithhoney24/stateful-chatbot-OAuth.git/"
    target="_blank"
    className="text-yellow-950 bg-gray-100 border-0 py-3 px-6 focus:outline-none hover:bg-[#918074] rounded-lg font-bold"
  >
    View on Chainlit
  </Link>
</div>



        </div>
      </section>
    </div>
  );
}

export default Project;
