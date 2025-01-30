import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/project.module.css";
function ProjectComp() {
  const obj = [
    {
      projectName: "ROI BASED IMAGE RETEIRVAL",
      dicreption:
        "this project allow you to find the similer image ,which you have been selected by",
      language: "React JS , pyhton , Using Deep learning alogithams (CNN)",
    },
    {
      projectName: "Blogs contents",
      dicreption:
        "this project allow you to find the similer image ,which you have been selected by",
      language: "Reactjs, Expressjs, Mongodb",
    },
    {
      projectName: "chatting App using Database",
      dicreption:
        "Chat with people with secure connection and saved secure storage",
      language: "js , express js",
    },
    {
      projectName: "Real Time chatApp",
      dicreption:
        "this is a real time chat application we can use it to communicate in real time",
      language: "javaScript,PHP,Sql",
    },
    {
      projectName: "Image Editor",
      dicreption: "This is a image Editor App. providing you filters",
      language: "react js",
    },
  ];
  return (
    <>
      <motion.div>
        <div
          className={styles.project}
        >
          <div classNameName={styles.projectBox}>
            <p className="text-4xl">nitin's project</p>
            <a target="_blank" href="https://chatapp-s9gx.onrender.com/">
              {" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <h2> Real Time chatApp</h2>
          <div className="imgBox">
            <img src="chattingApp.png" alt="" />
          </div>
          <p>
            this is a real time chat application we can use it to communicate in
            real time
          </p>
          <span>
            This project build up from html , css , js , and express js{" "}
          </span>
          <div className="iconBox">
            <a target="_blank" href="https://github.com/Nitin-lohumi">
              <i className="fa-brands fa-github"></i>
            </a>
            <a target="_blank" href="https://github.com/Nitin-lohumi">
              {" "}
              <i className="fa-solid fa-code-branch"></i>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectComp;
