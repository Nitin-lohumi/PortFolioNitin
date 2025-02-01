import React, { useState } from "react";
import { motion } from "framer-motion";
import MoveText from "@/utility/MoveText";
import style from "../styles/body.module.css";
import { useContext } from "react";
import { AppContext } from "@/pages/_app";
function Body() {
  const context = useContext(AppContext);
  const [word, setWord] = useState(
    "exploring the programming languages like -java, JavaScript, and  as well as frameworks such as and ReactJS, node Js, express js. I am also familiar with JavaScript libraries. basically i have learned - front-end : Javascript , ReactJs, JQuery . back-end : express, nodeJs, PHP , Python. Database - mongodb, SQL. Version Control Systems - GIT"
  );
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: "-100px" }}
      animate={{
        y: "0px",
        opacity: 1,
        transitionEnd: { x: [0, -5, 5, -5, 5, 0] },
      }}
      transition={{
        duration: 0.5,
        ease: "circIn",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
      }}
      style={{ height: isExpanded ? "90vh" : "" }}
    >
      <motion.div
        className={!isExpanded?style.mainProfileDiv:""}
      >
        <motion.div>
          <h1
            style={{
              fontSize: "3.4rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            This is{" "}
            <motion.span
              style={{
                textAlign: "center",
                fontSize: "3.8rem",
                color: "rgb(6, 131, 220)",
                textShadow:
                  "2px 1px 3px rgba(255, 255, 255, 0.6), -2px -2px 10px rgba(0, 0, 0, 0.8)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.7,
                delay: 1,
                ease: "circInOut",
              }}
            >
              <span style={{ fontSize: "5rem", fontWeight: "700" }}>N</span>itin
              Lohumi
            </motion.span>{" "}
          </h1>
          <MoveText heading={"Welcome to my PortFolio !"} duration={6000} />
        </motion.div>

        <motion.div style={{ display: "flex", justifyContent: "center"}}>
          <motion.div
            className={!context.isMobile?style.imageBackgroundDiv:style.mobilephone}
            layout
            style={{
              position: isExpanded ? "fixed" : "",
              top: context.isMobile?isExpanded ? "-12%" : "":isExpanded?"10%":"",
              left:context.isMobile?isExpanded ? "0%" : "":isExpanded?"10%":"",
              zIndex: isExpanded ? 1000 : -1,
              cursor: isExpanded ? "zoom-out" : "zoom-in",
              borderRadius: isExpanded ? "10px" : "0px",
              display: isExpanded ? "flex" : "",
              alignItems: "flex-start",
            }}
            initial={{ scale: 0 }}
            animate={{
              width:context.isMobile?isExpanded ? "100%" : "":isExpanded?"80%":"",
              height: isExpanded ? "80vh" : "auto",
              borderRadius: isExpanded ? "0" : "10px",
              zIndex: isExpanded ? 1000 : 1,
              scale: 1,
              transform: isExpanded ? "translate(-50%,-50%)" : ""
            }}
            transition={{
              duration: 1,
              ease: "backOut",
            }}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <motion.div
              className={style.layoutProfile}
              initial={{ y: "-900px" }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "circInOut",
              }}
              style={{ zIndex: isExpanded ? 1000 : "",top:"-10px" }}
            >
              <img src="/portfolio_pic.png" className={!context.isMobile?style.image:style.mobileImage} />
              <div
                className={style.info}
                style={{
                  borderRadius: isExpanded ? 0 : "",
                  position: isExpanded ? "absolute" : "",
                  top:context.isMobile?isExpanded ? "300px" : "":isExpanded?"350px":"",
                  lineHeight: context.isMobile?isExpanded ? "23px" : "":isExpanded?"30px":"",
                  height:context.isMobile?isExpanded ? "450px" : "":isExpanded?"100vh":"",
                  borderRadius: isExpanded ? "0.5rem" : "",
                }}
              >
                <motion.div style={{ padding: "20px", width: "100%" }}>
                  <div className={style.profileInfo}>
                    <h1
                      style={{
                        textAlign: "center",
                        fontSize: "1.8rem",
                        paddingBottom: "7px",
                      }}
                    >
                      Hey
                    </h1>
                    <h1
                      style={{
                        zIndex: "1000",
                        lineBreak: "strict",
                        fontSize: "1.5rem",
                        textAlign: "center",
                        color: "yellowgreen",
                        fontWeight: "600",
                      }}
                    >
                      I AM A FULL STACK DEVELOPER
                    </h1>
                    <h1 className={style.HideShowWord}>
                      {isExpanded ? (
                        word
                      ) : (
                        <>{/* Display truncated text */}</>
                      )}
                    </h1>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Body;
