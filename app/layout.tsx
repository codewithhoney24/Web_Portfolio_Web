import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nousheen Atif | Freelance Web Developer |  Next.js Expert | AI Enthusiast",
  description:
    "I’m Nousheen Atif — a freelance web developer and GIAIC student skilled in HTML, CSS, JavaScript, TypeScript, and Next.js. Currently learning AI with Agentic technologies. Open to remote jobs, projects, and collaborations.",
  keywords: [
    "Freelance Web Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Agentic AI",
    "OpenAI SDK",
    "Remote Web Projects",
    "Hire Developer Pakistan",
    "GIAIC Student",
    "HTML CSS TypeScript Developer",
    "Python Developer",
    "Web Development Portfolio",
    "Freelance AI Developer",
    "Remote Work Opportunities",
    "Web Developer Pakistan",
    "Web Development",
    "Next.js Portfolio",
    "AI Development",
    "Agentic Cloud",
    "OpenAI Agents SDK",
    "Dapr Agentic Cloud",
    "Remote Freelance Developer",
    "Web Developer for Startups",
    "Web Developer for Tech Companies",
    "Web Developer for Freelance Projects",
    "Web Developer for Remote Jobs",
    "Web Developer for Collaborations",
    "Web Developer for AI Projects",
    "Web Developer for Agentic Technologies",
    "Web Developer for OpenAI",
    "Web Developer for Agentic AI",
    "SEO Portfolio"
  ],
  authors: [{ name: "Nousheen Atif", url: "https://www.linkedin.com/in/nousheen-atif-7873a28a" }],
  creator: "Nousheen Atif",
  publisher: "Nousheen Atif",
  robots: "index, follow",
  metadataBase: new URL("https://your-portfolio-url.com"),

  // This is where you can add alternate languages (outside openGraph)
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ur-PK": "/ur-PK",
      "en-GB": "/en-GB",
      "ar-SA": "/ar-SA",
    },
  },


  openGraph: {
    title: "Nousheen Atif | Freelance Web Developer |  Next.js Expert | AI Enthusiast",
    description:
      "Freelance frontend developer building modern websites with Next.js and exploring AI with Agentic cloud tech. Available for freelance and remote roles.",
    url: "https://your-portfolio-url.com",
    siteName: "Nousheen Atif Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg", // Add a real image for sharing preview
        width: 1200,
        height: 630,
        alt: "Nousheen Atif | Freelance Web Developer",
      },
    ],
    type: "website",
     locale: "en_PK", // ✅ Default
    
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nousheen Atif",
              "url": "https://your-portfolio-url.com",
              "sameAs": [
                "https://www.linkedin.com/in/nousheen-atif-7873a28a",
                "https://github.com/your-github",
                "https://twitter.com/your-twitter"
              ],
              "jobTitle": "Freelance Web Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-employed"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "GIAIC"
              },
              "knowsAbout": [
                "HTML",
                "CSS",
                "TypeScript",
                "Next.js",
                "Python",
                "OpenAI",
                "Agentic AI"
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

