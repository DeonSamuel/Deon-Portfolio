import Head from "next/head";
import Email from "@/components/Email";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import SocialIcons from "@/components/SocialIcons";

function Index() {
  return (
    <div className="app">
      
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
        
        <title>Deon Samuel Fernandes</title>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      {true && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default Index;
