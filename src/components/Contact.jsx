import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import React, { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden  ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Name:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className=" text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary bg-tertiary py-4 px-6 "
            />
          </label>

          {/* email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Email:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className=" text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary bg-tertiary py-4 px-6 "
            />
          </label>

          {/* message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Message:</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className=" text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary bg-tertiary py-4 px-6 "
            />
          </label>

          {/* form */}
          <button
            className=" text-white bg-tertiary py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-primary "
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
