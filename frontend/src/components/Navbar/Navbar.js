import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navArr = ["contact", "work", "skills", "about"];
  const navItems = navArr.map((item) => {
    return (
      <li className="app__flex p-text" key={`link-${item}`}>
        <a href={`#${item}`}>{item}</a>
        <div />
      </li>
    );
  });
  const hamburgerItems = navArr.map((item) => {
    return (
      <li key={{ item }}>
        <a href={`#${item}`} onClick={() => setToggle(false)}>
          {item}
        </a>
      </li>
    );
  });

  return (
    <nav className="app__navbar">
      <div>
        <img />
      </div>
      <ul className="app__navbar-links">{navItems}</ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>{hamburgerItems}</ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
