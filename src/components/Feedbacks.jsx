import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  designation,
  name,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl w-full xs:w-[320px] "
    >
      <p className=" text-white text-6xl  ">"</p>
      <div className="mt-1">
        <p className=" text-white tracking-wider text-lg ">{testimonial}</p>
        <div className=" mt-7 flex justify-between items-center gap-1 ">
          <div className="flex flex-1 flex-col">
            <p className=" text-white font-medium text-base ">
              <span className=" blue-text-gradient ">@{name}</span>
            </p>
            <p className=" text-secondary text-sm mt-1 ">
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`Feedback-from-${name}`} className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};
const Feedbacks = () => {
  return (
    <div className=" mt-12 bg-black-100 rounde-[20px] ">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What other say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap pb-14 gap-7 `}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
