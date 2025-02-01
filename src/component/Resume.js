import { motion } from "framer-motion";
import React from "react";
import style from "../styles/project.module.css";
import { FaDownload } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "@/pages/_app";
function Resume() {
  const context = useContext(AppContext);
  return (
    <>
      <motion.div className={context.isMobile?style.mainResumeBoxMobile:style.mainResumeBox} style={{marginBottom:"40px",marginTop:"50px"}}>
        <motion.div className={context.isMobile?style.resumeMobile:style.resume}>
          <motion.div className={context.isMobile?style.mainResumeMobile:style.mainResume}>
            <h2 style={{fontSize:"2rem",textAlign:"center",margin:"10px"}}>RESUME</h2>
            <img src="Portfolio_pic.png" alt="resume" className={style.resumeImg}/>
            <div className={style.download}>
              <p style={{fontSize:"1.5rem",textAlign:"center",padding:"10px"}}>Click to button to download Resume</p>
              <button style={{paddingTop:"10px",marginBottom:"10px",border:"1px solid white",padding:"5px",borderRadius:".5rem"}}>
                <a href="NitinResume.pdf" download style={{fontSize:"1rem",display:"flex",alignItems:"center"}}>
                   <FaDownload style={{fontSize:"2rem",paddingRight:"10px"}}/> <p style={{fontSize:"2rem"}}>download</p>
                </a>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Resume;
