import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../utils";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const skills = [images.javascript, images.react, images.mui, images.nodejs, images.express, images.postgreSql, images.sass, images.html, images.css];
const skillList = skills.map((skill, index) => {
  return (
    <div className="circle-cmp app__flex" key={`circle-${index}`}>
      <img src={skill} alt="skill-icon" />
    </div>

  );
});

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        className="app__header-info"
        whileInView={{ x: [-250, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Aloha World!</p>
              <h1 className="head-text" alt="header text">
                I'm Kenneth
              </h1>
            </div>
          </div>
          <motion.div
        // className="app__header-info"
        whileInView={{ x: [500, 0], opacity: [0, 1] }}
        transition={{ duration: 1.75 }}
      >
          <div className="tag-cmp2 app__flex">
            <p className="p-text">Developer.</p>
            <p className="p-text">Full-Stack Developer.</p>
          </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img className='profile' src={images.photo} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.photo}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {skillList}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
