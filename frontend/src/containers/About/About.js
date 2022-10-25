import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../utils";

const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "I am a passionate web developer",
      imgUrl: images.travel,
    },
    {
      title: "Web Development",
      description: "I am a passionate web developer",
      imgUrl: images.league,
    },
    {
      title: "Web Development",
      description: "I am a passionate web developer",
      imgUrl: images.restaurant,
    },
    {
      title: "Web Development",
      description: "I am a passionate web developer",
      imgUrl: images.study,
    },
  ];

  const aboutList = abouts.map((about, index) => {
    return (
      <motion.div
        className="app__profile-item"
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
        key={about.title + index}
      >
        <img src={about.imgUrl} alt={about.title} />
        <h2 className="bold-text" style={{ marginTop: 20 }}>
          {about.title}
        </h2>
        <p className="p-text" style={{ marginTop: 10 }}>
          {about.description}
        </p>
      </motion.div>
    );
  });
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">{aboutList}</div>
    </>
  );
};

export default About;
