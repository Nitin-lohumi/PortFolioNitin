import { motion } from "framer-motion";
import styles from "../styles/about.module.css";
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
        transition={{ duration: 1.5, ease: "backInOut" }}
      >
        <h2 style={{ marginTop: "50px", marginLeft: "20px" }}>About Me</h2>
        <p style={{ padding: "20px" }}>
          I'm a passionate and dedicated developer with expertise in front-end
          and back-end development. My goal is to build dynamic and
          user-friendly applications that provide exceptional user experiences.
          I enjoy solving real-world problems through technology and constantly
          challenge myself to learn new skills. My journey has led me to
          specialize in JavaScript and frameworks like React.js and Next.js, but
          I am always eager to expand my knowledge. I aim to contribute to
          impactful projects and collaborate with other developers to create
          innovative solutions.
        </p>
      </motion.div>

      <motion.div
        className={styles.photos}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "circInOut" }}
      >
        <motion.img
          src="/photo2.png"
          alt="Photo 1"
          style={{ filter: "drop-shadow(1px 2px 5px rgba(69, 67, 67, 0.8))" }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      <motion.div
        className={styles.skills}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "backInOut" }}
      >
        <h3>My Skills</h3>
        <ul>
          <motion.li
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2a3d6e",
              color: "#fff",
              transition: { duration: 0.2 },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              background: "#2a3d9e",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius:".5rem",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <IoLogoJavascript />
              <p>JavaScript</p>
            </a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2a3d6e",
              color: "#fff",
              transition: { duration: 0.2 },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              background: "#2a3d9e",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaReact />
              <p>ReactJs</p>
            </a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2a3d6e",
              color: "#fff",
              transition: { duration: 0.2 },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              background: "#2a3d9e",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <p>ExpressJs</p>
            </a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2a3d6e",
              color: "#fff",
              transition: { duration: 0.2 },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              background: "#2a3d9e",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <RiNextjsFill />
              <p>NextJs</p>
            </a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2a3d6e",
              color: "#fff",
              transition: { duration: 0.2 },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              background: "#2a3d9e",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <SiMongodb />
              <p>MongoDB</p>
            </a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2a3d6e",
              color: "#fff",
              transition: { duration: 0.2 },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              background: "#2a3d9e",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <a
              href="https://www.mysql.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <GrMysql />
              <p>SQL</p>
            </a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2a3d6e",
              color: "#fff",
              transition: { duration: 0.2 },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              background: "#2a3d9e",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <a
              href="https://www.java.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaJava />
              <p>Java</p>
            </a>
          </motion.li>

          <motion.li
            whileHover={{
              scale: 1.1,
              backgroundColor: "#2a3d6e",
              color: "#fff",
              transition: { duration: 0.2 },
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              background: "#2a3d9e",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <FaGithub />
              <p>Github</p>
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </section>
  );
}
