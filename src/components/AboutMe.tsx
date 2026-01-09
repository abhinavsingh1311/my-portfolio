import { FileText, Download } from "lucide-react";

import Images, { imageData } from "./shared/Images";
export default function AboutMe() {
  return (
    <div className="">
      <section className="mb-12">
        <div className="">
          <a href="/resume.pdf" target="_blank" className="">
            <FileText size={20} />
            View Resume
          </a>
          <a href="/resume.pdf" download="AbhinavSingh_Resume.pdf" className="">
            <Download size={20} />
            Download Resume
          </a>
        </div>
        <div className="">
          <div className="">
            <p className="">
              My journey into the world of technology began with a fascination
              for how things work. From a young age, I was captivated by the
              possibilities of what could be created through code. This
              curiosity led me to explore programming as more than just a
              skill—it became my passion.
            </p>

            <p className="">
              After completing my high school education at Shemrock Senior
              Secondary School in India in 2021, I decided to pursue my dream of
              becoming a software developer. This led me to Edmonton, Alberta,
              where I enrolled in the Computer Software Development program at
              the Northern Alberta Institute of Technology (NAIT).
            </p>
          </div>
          <div className="">
            <Images
              url={imageData.earlyDays.url}
              description={imageData.earlyDays.description}
            />
          </div>
        </div>

        <h2 className="">Education</h2>
        <div className="">
          <div className="">
            <Images
              url={imageData.NAIT.url}
              description={imageData.NAIT.description}
            />
          </div>
          <div className="">
            <a
              className=""
              href="https://www.nait.ca/programs/software-development"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              DMIT: Computer Software Dev. Diploma
            </a>
            <div className="">
              Northern Alberta Institute of Technology (NAIT) | 2023-2024
            </div>
            <ul className="">
              <li>Graduated with perfect 4.0 CGPA</li>
              <li>Earned a place on the Dean&apos;s Honor Roll</li>
              <li>
                Specialized in full-stack development with React, ASP.NET, and
                Three.js
              </li>
              <li>
                Led a capstone project that was delivered two weeks ahead of
                schedule
              </li>
            </ul>
          </div>
        </div>

        <h2 className="">My Path to Development</h2>

        <div className="">
          <div className="" style={{ width: "-webkit-fill-available" }}>
            <Images
              url={imageData.codingJourney.url}
              description={imageData.codingJourney.description}
            />
          </div>
          <div className="">
            <p className="">
              At NAIT, I discovered my aptitude for both frontend and backend
              technologies. I became particularly interested in creating
              visually stunning interfaces while ensuring robust underlying
              systems.
            </p>

            <p className="">
              My dedication to excellence helped me master technologies like
              React, ASP.NET Core, and Three.js, along with database systems
              including PostgreSQL and MSSQL. I am especially proud of my work
              optimizing database schemas and implementing secure authentication
              systems.
            </p>

            <p>
              My capstone project was a defining moment in my educational
              journey. Working as a full-stack developer, I reduced data
              processing time by 40% through optimized database structures and
              built intuitive interfaces that accelerated workflows by 35%.
              These achievements, along with implementing robust security
              measures, allowed us to deliver the project two weeks ahead of
              schedule with an A+ grade.
            </p>
          </div>
        </div>

        <div className="">
          <div className="">
            <Images
              url={imageData.portfolio.url}
              description={imageData.portfolio.description}
            />
          </div>
        </div>

        <p className="">
          Today, I continue to push the boundaries of what is possible with web
          technologies. My recent work at SAIL (Society for AI Literacy)
          involved building an EHR data pipeline for cardiologists—an automated
          system using OpenAI&apos;s API that parses and standardizes medical
          records, saving clinicians hundreds of hours of manual data entry each
          month. While this is just the beginning of my career, it taught me
          what it takes to ship production-ready software and collaborate
          directly with real clients.
        </p>

        <p className="">
          I am fluent in English, Punjabi (my native language), and Hindi, which
          helps me connect with diverse teams and collaborate effectively. I am
          excited to continue growing as a developer and creating solutions that
          make a difference.
        </p>
      </section>
    </div>
  );
}
