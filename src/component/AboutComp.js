import { motion } from 'framer-motion';
import styles from '../styles/about.module.css';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function AboutComp() {
  return (
    <section className={styles.aboutSection}>
      <motion.div 
        className={styles.intro}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5, ease:"backInOut" }}>
        <h2 style={{marginTop:"50px",marginLeft:"20px"}}>About Me</h2>
        <p style={{padding:"20px"}}>
          I'm a passionate and dedicated developer with expertise in front-end and back-end development.
          My goal is to build dynamic and user-friendly applications that provide exceptional user experiences.
          I enjoy solving real-world problems through technology and constantly challenge myself to learn new skills.
          My journey has led me to specialize in JavaScript and frameworks like React.js and Next.js, but I am always eager to expand my knowledge.
          I aim to contribute to impactful projects and collaborate with other developers to create innovative solutions.
        </p>
      </motion.div>

      <motion.div 
        className={styles.photos}
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1.5, ease: "circInOut" }}>
        <motion.img 
          src="/portfolio_pic.png" 
          alt="Photo 1" 
          whileHover={{ scale: 1.1 }} 
          transition={{ duration: 0.3 }} />
      </motion.div>

      <motion.div 
        className={styles.skills}
        initial={{ x: -200, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1.5, ease: "backInOut" }}>
        <h3>My Skills</h3>
        <ul>
          <motion.li style={{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",background:"#2a3d9e",color:"white"}}
            whileHover={{ scale: 1.1, backgroundColor: "#2a3d6e", color: "#fff", transition: { duration: 0.2 } }}>
            <IoLogoJavascript/><p>JavaScript</p>
          </motion.li>
          <motion.li style={{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",background:"#2a3d9e",color:"white"}}
            whileHover={{ scale: 1.1, backgroundColor: "#2a3d6e", color: "#fff", transition: { duration: 0.2 } }}>
            <FaReact/><p>ReactJs</p>
          </motion.li>
          <motion.li style={{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",background:"#2a3d9e",color:"white"}}
            whileHover={{ scale: 1.1, backgroundColor: "#2a3d6e", color: "#fff", transition: { duration: 0.2 } }}>
            <p>ExpressJs</p>
          </motion.li>
          <motion.li style={{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",background:"#2a3d9e",color:"white"}}
            whileHover={{ scale: 1.1, backgroundColor: "#2a3d6e", color: "#fff", transition: { duration: 0.2 } }}>
            <RiNextjsFill/><p>NextJs</p>
          </motion.li>
          <motion.li style={{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",background:"#2a3d9e",color:"white"}}
            whileHover={{ scale: 1.1, backgroundColor: "#2a3d6e", color: "#fff", transition: { duration: 0.2 } }}>
            <SiMongodb/><p>MongoDB</p>
          </motion.li>
          <motion.li style={{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",background:"#2a3d9e",color:"white"}}
            whileHover={{ scale: 1.1, backgroundColor: "#2a3d6e", color: "#fff", transition: { duration: 0.2 } }}>
            <GrMysql/><p>Sql</p>
          </motion.li>
          <motion.li style={{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",background:"#2a3d9e",color:"white"}}
            whileHover={{ scale: 1.1, backgroundColor: "#2a3d6e", color: "#fff", transition: { duration: 0.2 } }}>
            <FaJava/><p>Java</p>
          </motion.li>
          <motion.li style={{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer",background:"#2a3d9e",color:"white"}}
            whileHover={{ scale: 1.1, backgroundColor: "#2a3d6e", color: "#fff", transition: { duration: 0.2 } }}>
            <FaGithub/><p>Github</p>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
}
