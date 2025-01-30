import React, { useState } from "react";
import { motion } from "framer-motion";
import MoveText from "@/utility/MoveText";
import style from "../styles/body.module.css";
function Body() {
  const [word, setWord] = useState(
    "exploring the programming languages like -java, JavaScript, and  as well as frameworks such as and ReactJS, node Js, express js. I am also familiar with front-end CSS frameworks, and JavaScript libraries. basically i have learned - front-end : Javascript , ReactJs, JQuery . back-end : express, nodeJs, PHP , Python. Database - mongodb, SQL. Version Control Systems - GIT"
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
    >
      <motion.div
        style={{
          display: !isExpanded ? "grid" : "block",
          gridTemplateColumns: isExpanded?"":"2fr 2fr",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <motion.div>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            This is{" "}
            <motion.span
              style={{
                textAlign: "center",
                fontSize: "4rem",
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
                delay:1,
                ease: "circInOut",
              }}
            >
              <span style={{ fontSize: "5rem", fontWeight: "700" }}>N</span>itin
              Lohumi
            </motion.span>{" "}
          </h1>
          <MoveText heading={"Welcome to my PortFolio !"} duration={6000} />
        </motion.div>
        <motion.div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              className={style.imageBackgroundDiv}
              layout //if not work remove this 
              style={{
               position:isExpanded?"fixed":"",
               background:isExpanded?"":"",
               top:isExpanded?"10%":"",
               left:isExpanded?"10%":"",
               zIndex:isExpanded?10:0,
               cursor:isExpanded?"zoom-out":"zoom-in",
              //  transform:isExpanded?"translate(-50%,-50%)":"",
               boxShadow:isExpanded?"-2px -1px 1px  white":"",
               borderRadius: isExpanded ? "10px" : "0px",
               display:isExpanded?"flex":"",
               alignItems:"flex-start"
              }}
              initial={{scale:0}}
              animate={{
                width: isExpanded ? "80vw" : "auto",
                height: isExpanded ? "80vh" : "auto",
                borderRadius: isExpanded ? "0" : "10px",
                zIndex: isExpanded ? 10 : 1,
                scale:1,
                transform:isExpanded?"translate(-50%,-50%)":""
              }}
              transition={{
                duration: 1,
                ease:"backOut"
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
                style={{  }}
              >
                <img src="/portfolio_pic.png" className={style.image} />
                <div className={style.info}
                style={{borderRadius:isExpanded?0:"",width:isExpanded?"":"",position:isExpanded?"absolute":"",top:isExpanded?"350px":"",lineHeight:isExpanded?"30px":"",height:isExpanded?"100vh":"",borderRadius:isExpanded?"0.5rem":""}}
                >
                  <motion.div style={{ padding: "20px", width: "100%" }}>
                    <div className={style.profileInfo}>
                      <h1 style={{ textAlign: "center", fontSize: "1.8rem" ,paddingBottom:"6px"}}>
                        Hey
                      </h1>
                      <h1
                        style={{
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
                      {isExpanded?word: <>
                       <p
                          style={{
                            textAlign: "center",
                            marginBottom: "10px",
                            textTransform: "capitalize",
                          }}
                        >
                          {"exploring the programming languages "}
                        </p>
                        <p
                          style={{
                            textAlign: "center",
                            textTransform: "Capatilize",
                          }}
                        >
                          {"like -java, JavaScript , and ........"}
                        </p></>}
                      </h1>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default Body;
