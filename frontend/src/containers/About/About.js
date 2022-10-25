import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  
  const aboutList = abouts.map((about, index) => {
    return (
      <motion.div
        className="app__profile-item"
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
        key={about.title + index}
      >
        <motion.img
          src={urlFor(about.imgUrl)}
          alt={about.title}
          whileHover={{
            boxShadow: "4px 4px 4px 4px grey",
            filter: "grayscale(0%)",
            transition: "all 500ms ease",
          }}
        />
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
        <span> Good Coding</span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <div className="app__profiles">{aboutList}</div>
    </>
  );
};

export default AppWrap(About, 'about');
