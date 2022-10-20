import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import { images } from "../../utils";

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
const skills = [images.javascript, images.react];
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
        whileInView={{ x: [-150, 0], opacity: [0, 1] }}
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
          <div className="tag-cmp app__flex">
            <p className="p-text">Software Developer</p>
            <p className="p-text">Full-Stack</p>
          </div>
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

export default Header;
