import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Potato Disease",
      projectLink: "https://github.com/DeonSamuel/Potato-Disease-Detector",
      projectDescription:
        "This is a end to end application that detects potato plant diseases. Detection involves identifying and diagnosing diseases affecting potato plants by analyzing their leaves. Common diseases include late blight, early blight, and bacterial wilt. Use of CNN models to detect these diseases for ease of farmers.",
      projectTech: [
        "React",
        "FastApi",
        "CSS",
        "Jupyter Notebook",
      ],
      projectExternalLinks: {
        github: "https://github.com/DeonSamuel/Potato-Disease-Detector/blob/main/Potato-disease/training.ipynb",
        externalLink: "https://github.com/DeonSamuel/Potato-Disease-Detector",
      },
    },
    {
      image: "/project2.jpg",
      projectName: "Threads Clone",
      projectLink: "https://threads-deon.onrender.com/",
      projectDescription:
        "This is a social media app made with React and Node.js that sends real-time messages and is highly scalable. Threads developed by Meta (formerly Facebook), is designed for close friends and intimate sharing.  ",
      projectTech: [
        "React",
        "Socket.io",
        "Node.js",
        "Express",
        "MongoDB",
        "Chakra UI",
      ],
      projectExternalLinks: {
        github: "https://github.com/DeonSamuel/ThreadsClone",
        externalLink: "https://threads-deon.onrender.com/",
      },
    },
    // {
    //   image: "/project3.png",
    //   projectName: "Netflix App",
    //   projectLink: "https://netlify.com",
    //   projectDescription:
    //     "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
    //   projectTech: [
    //     "React",
    //     "Node.js",
    //     "Firebase",
    //     "MongoDB",
    //     "Express",
    //     "Redux Toolkit",
    //   ],
    //   projectExternalLinks: {
    //     github: "",
    //     externalLink: "",
    //   },
    // },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
