import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className=" xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-3xl shadow-card "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ">
            <img src={icon} alt={title} />
            <h3 className=" text-white text-enter font-bold text-20px ">{title}</h3>
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
        className=" mt-4 text-secondary text-[17px] max-w-3xl leading-8 "
      >
        I am a software developer with a passion for creating innovative
        solutions. Javascript is my primary language, and I have experience in
        building web applications using React, Node.js, and Express. I am also
        skilled in database management with MongoDB and MySQL. My expertise
        extends to cloud services like AWS and Azure, where I deploy and manage
        applications. I am proficient in version control using Git and have a
        strong understanding of Agile methodologies. I am committed to writing
        clean, maintainable code and continuously improving my skills. I thrive
        in collaborative environments and enjoy working with cross-functional
        teams to deliver high-quality software solutions. My goal is to leverage
        my technical skills and problem-solving abilities to contribute to
        impactful projects that drive business success.
      </motion.p>

      {/* CARDS */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");