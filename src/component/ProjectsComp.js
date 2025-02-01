import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/project.module.css";
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "@/pages/_app";
import Image from "next/image";
const obj = [
  {
    projectName: "ROI BASED IMAGE RETEIRVAL",
    description: "Find similar images based on the selected one.",
    language: "React JS, Python, CNN",
    linkRedirect: "https://chatapp-s9gx.onrender.com/",
    githubprojectLink: "https://github.com/Nitin-lohumi/ROI_image_retrival_AI",
    githubLink: "https://github.com/Nitin-lohumi",
    photo:"/photo4.png"
  },
  {
    projectName: "Blogs Contents",
    description: "A platform for writing and sharing blogs.",
    language: "React.js, Express.js, MongoDB",
    linkRedirect: "https://chatapp-s9gx.onrender.com/",
    githubprojectLink: "https://github.com/Nitin-lohumi/Blog_platform",
    githubLink: "https://github.com/Nitin-lohumi",
    photo:"/photo5.png"
  },
  {
    projectName: "Chatting App using Database",
    description: "Chat securely with people.",
    language: "JavaScript, Express.js",
    linkRedirect: "https://chatapp-s9gx.onrender.com/",
    githubprojectLink: "https://github.com/Nitin-lohumi/chatAPP",
    githubLink: "https://github.com/Nitin-lohumi",
    photo:"/chat.png"
  },
  {
    projectName: "Real-Time ChatApp",
    description: "Real-time chat application for instant messaging.",
    language: "JavaScript, PHP, SQL",
    linkRedirect: "https://chatapp-s9gx.onrender.com/",
    githubprojectLink: "https://chatapp-s9gx.onrender.com/",
    githubLink: "https://github.com/Nitin-lohumi",
    photo:"/chatRealTime.png"
  },
  {
    projectName: "News App",
    description: "A simple news application.",
    language: "React JS",
    linkRedirect: "nitinnewsapp.vercel.app",
    githubprojectLink: "https://github.com/Nitin-lohumi/News_latest",
    githubLink: "https://github.com/Nitin-lohumi",
    photo:"/news.png"
  },
];

function ProjectComp() {
  const context = useContext(AppContext);
  const projectRefs = useRef([]);
  const [activeProject, setActiveProject] = useState(obj[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveProject(obj[index]);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        className={styles.project}
        style={{
          display: context.isMobile ? "flex" : "1fr 3fr",
          overflowX: context.isMobile ? "scroll" : "hidden",
          gridTemplateColumns: context.isMobile ? "1fr" : "1fr 3fr",
          width: "100%",
          height:context.isMobile ? "auto" : "100vh",
        }}
      >
        <motion.div
          style={{
            position: "sticky",
            top: "60px",
            left: "0",
            zIndex: 10,
            color: "white",
            width: "50%",
            height: "70vh",
            display: context.isMobile ? "none" : "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            zIndex: "10",
          }}
          initial={{ x: "-500px", opacity: 0, scale: 1.6 }}
          animate={{ x: "20px", opacity: 1, scale: 1.2 }}
          transition={{ duration: 2, ease: "backInOut" }}
        >
          <h1
            style={{
              margin: "0",
              color: "skyblue",
              fontSize: "2rem",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            PROJECT'S
          </h1>
          <motion.div
            style={{
              width: "50%",
              textAlign: "center",
              paddingTop: "5px",
              textAlign: "center",
            }}
          >
            {activeProject.projectName}
          </motion.div>
          <motion.div
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              position: "relative",
              top: "30%",
              left: "55%",
              transform: "translate(-50%,-50%)",
              width: "100%",
              textAlign: "center",
            }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "backInOut" }}
            >
              {activeProject.description}
            </motion.h1>
            <span
              style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "50px",
              }}
            >
              <a
                target="_blank"
                href={activeProject.linkRedirect}
                style={{ fontSize: "1.7rem" }}
              >
                <LuExternalLink />
              </a>
              <a
                target="_blank"
                href={activeProject.githubLink}
                style={{ fontSize: "1.3rem" }}
              >
                <FaCodeBranch />
              </a>
            </span>
          </motion.div>
        </motion.div>

        <div
          style={{
            overflowY: context.isMobile ? "hidden" : "scroll",
            height: context.isMobile ? "auto" : "100vh",
            display: context.isMobile ? "flex" : "",
            width: "100%",
            margin:"auto",
            scrollBehavior: "smooth",
          }}
        >
          {!context.isMobile ? (
            <>
              {obj.map((v, i) => (
                <motion.div
                  key={i}
                  ref={(el) => (projectRefs.current[i] = el)}
                  className={styles.box}
                  style={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "white",
                    scrollSnapAlign: "start",
                  }}
                  initial={{ opacity: 0, scale: 1.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "backInOut" }}
                >
                  <motion.div
                    className={styles.projectBox}
                    whileInView={{
                      opacity: 1,
                      scale: 1.2,
                      boxShadow: "1px 2px 1px green",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "95%",
                        paddingTop: "20px",
                      }}
                    >
                      <p style={{ fontSize: "1.7rem" }}>Nitin's Project</p>
                      <a
                        target="_blank"
                        href={v.linkRedirect}
                        style={{ fontSize: "1.7rem" }}
                      >
                        <LuExternalLink />
                      </a>
                    </div>
                    <h2
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: "700",
                        paddingTop: "34px",
                        paddingBottom: "20px",
                        color: "lightyellow",
                      }}
                    >
                      {v.projectName}
                    </h2>
                    <div className="imgBox">
                      <Image
                        src={v.photo}
                        style={{
                          marginTop:"10px",
                          marginBottom:"30px",
                          scale: "1.9",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                        }}
                        alt="image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <p
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                        wordWrap: "break-word",
                        fontSize: "1.2rem",
                        padding: "2px",
                        paddingBottom: "20px",
                      }}
                    >
                      {v.description}
                    </p>
                    <span
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                        wordWrap: "break-word",
                        padding: "4px",
                        paddingBottom: "20px",
                      }}
                    >
                      {v.language}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                        paddingBottom: "30px",
                      }}
                    >
                      <a
                        target="_blank"
                        href={v.githubprojectLink}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <FaGithub />
                      </a>
                      <a
                        target="_blank"
                        href={v.githubLink}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <FaCodeBranch />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </>
          ) : (
            <motion.div
            style={{
              width: "100%",
              overflowX: "auto",
              overflowY:"hidden",
              display: "flex",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
            }}
            // drag="x"
            dragConstraints={{ left: -((obj.length - 1) * window.innerWidth) }}
            dragElastic={0.2}
            >
              {obj.map((v, i) => (
                <motion.div
                key={i}
                ref={(el) => (projectRefs.current[i] = el)}
                style={{
                  width: "100%",
                  margin:"auto",
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  textAlign: "center",
                  padding: "20px",
                }}
                 whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 1.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "backInOut" }}
                >
                  <motion.div
                    className={styles.projectBoxMobile}
                    whileInView={{
                      opacity: 1,
                      scale: 1.2,
                      boxShadow: "1px 2px 1px green",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "95%",
                        paddingTop: "20px",
                      }}
                    >
                      <p style={{ fontSize: "1.7rem" }}>Nitin's Project</p>
                      <a
                        target="_blank"
                        href={v.linkRedirect}
                        style={{ fontSize: "1.7rem" }}
                      >
                        <LuExternalLink />
                      </a>
                    </div>
                    <h2
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: "700",
                        paddingTop: "34px",
                        paddingBottom: "20px",
                        color: "lightyellow",
                      }}
                    >
                      {v.projectName}
                    </h2>
                    <div className="imgBox">
                      <Image
                        src={v.photo}
                        style={{
                          marginTop:"10px",
                          marginBottom:"30px",
                          scale: "1.3",
                          paddingBottom: "20px",
                          paddingTop: "20px",
                        }}
                        alt="image"
                        width={100}
                        height={100}
                      />
                    </div>
                    <p
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                        wordWrap: "break-word",
                        fontSize: "1.2rem",
                        padding: "2px",
                        paddingBottom: "20px",
                      }}
                    >
                      {v.description}
                    </p>
                    <span
                      style={{
                        textAlign: "center",
                        textTransform: "capitalize",
                        wordWrap: "break-word",
                        padding: "4px",
                        paddingBottom: "20px",
                      }}
                    >
                      {v.language}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "100%",
                        paddingBottom: "30px",
                      }}
                    >
                      <a
                        target="_blank"
                        href={v.githubprojectLink}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <FaGithub />
                      </a>
                      <a
                        target="_blank"
                        href={v.githubLink}
                        style={{ fontSize: "1.3rem" }}
                      >
                        <FaCodeBranch />
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default ProjectComp;
