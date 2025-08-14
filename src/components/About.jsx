import React from "react";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-3xl shadow-card"
      >
        <div className="bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center font-bold text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-8"
      >
        I create interactive and responsive experiences for individuals and
        organizations using modern web technology. I am currently into building
        immersive web animations and also exploring deploying interesting user
        experiences for. I specialize in{" "}
        <span className="font-bold italic ">JavaScript</span>,{" "}
        <span className="font-bold italic ">TypeScript</span>,{" "}
        <span className="font-bold italic ">React</span>,{" "}
        <span className="font-bold italic ">Nextjs</span>, and modern tools like
        <span className="font-bold italic ">Tailwind CSS</span>—and I’m
        currently diving into{" "}
        <span className="font-bold italic ">Three.js</span> and{" "}
        <span className="font-bold italic ">GSAP</span> to bring 3D and advanced
        animations to my projects. My focus is on blending great design with
        smooth performance to create interfaces people love using.
      </motion.p>

      {/* CARDS */}
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
