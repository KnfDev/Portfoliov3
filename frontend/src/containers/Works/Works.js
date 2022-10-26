import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap } from "../../wrapper";
import "./Works.scss";

const Works = () => {
  return (
    <>
      <h2 className="head-text">
        My<span> Portfolio</span>
      </h2>
      <div className="app__work-filter">

      </div>
    </>
  );
};

export default Works;
