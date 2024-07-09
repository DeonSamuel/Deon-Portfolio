import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello There! My name is Deon, and I am a passionate engineer always ready to learn new things.
            My interest in web development was
            sparked in 2021 when I created my first project called  {" "}
            <Link href="https://github.com/dikshapadi/Kaali" className="link" target="_blank">
              Kali 
            </Link>
            {" "},in a hackathon,
            which is a one stop center for all queries regarding women empowerment.
            
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I have grown a keen interest in making beautiful and responsive 
            websites along with making projects and understanding current trends using data science
            and Machine Learning concepts {" "}
            <Link href="https://github.com/" className="link" target="_blank">
              New Project.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Additionally, I am very intrigued in the art of public speaking and have dawned the 
            stage on multiple occasions. I am also the current head of my college&apos;s public speaking 
            or emcee team {" "}
            <Link
              className="link"
              target="_blank"
              href="https://www.linkedin.com/company/psychmic/mycompany/"
            >
              PsychMic
            </Link>
            {" "}.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Express</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Machine Learning</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Flask</li>
            <li className="about-grid-info-list-item">Material UI</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/deon.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
