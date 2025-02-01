import { motion } from 'framer-motion';
import styles from '../styles/contact.module.css';
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function ContactComp() {
  return (
    <section className={styles.contactSection}>
      {/* Title with fade-in animation */}
      <motion.h2 
        className={styles.contactTitle}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5, ease: "easeInOut" }}>
        Get in Touch
      </motion.h2>
      <motion.p 
      style={{fontSize:"1.5rem",textJustify:"inter-word",padding:"10px"}}
        className={styles.contactIntro}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5, ease: "easeInOut" }}>
        I'm always open to new opportunities, Get in touch for project discussions, technical advice, or collaborations.
      </motion.p>

      {/* Contact Info with hover effects */}
      <motion.div 
        className={styles.contactInfo}
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5, ease: "easeInOut" }}>

        {/* Phone number */}
        <motion.div 
          className={styles.contactItem}
          whileHover={{ scale: 1.05, backgroundColor: "#2a3d6e", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" }}>
            <p><IoCallOutline color="green"  size={25}/></p>
          <a href="tel:+7417696780" target="_blank" rel="noopener noreferrer">
            <span className={styles.contactItemText}>7417696780</span>
          </a>
        </motion.div>

        {/* GitHub */}
        <motion.div 
          className={styles.contactItem}
          whileHover={{ scale: 1.05, backgroundColor: "#2a3d6e", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" }}>
            <p><FaGithub color='black' size={25}/></p>
          <a href="https://github.com/Nitin-lohumi" target="_blank" rel="noopener noreferrer">
            <span className={styles.contactItemText}>GitHub</span>
          </a>
        </motion.div>

        {/* WhatsApp */}
        <motion.div 
          className={styles.contactItem}
          whileHover={{ scale: 1.05, backgroundColor: "#2a3d6e", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" }}>
            <p><FaWhatsappSquare color='green' size={25}/></p>
          <a href="https://wa.me/7417696780" target="_blank" rel="noopener noreferrer">
            <span className={styles.contactItemText}>WhatsApp</span>
          </a>
        </motion.div>

        {/* Telegram */}
        <motion.div 
          className={styles.contactItem}
          whileHover={{ scale: 1.05, backgroundColor: "#2a3d6e", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" }}>
            <p><FaTelegram size={25} color='blue'/></p>
          <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
            <span className={styles.contactItemText}>Telegram</span>
          </a>
        </motion.div>

        {/* LinkedIn */}
        <motion.div 
          className={styles.contactItem}
          whileHover={{ scale: 1.05, backgroundColor: "#2a3d6e", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)" }}>
            <p><FaLinkedin size={25} color='blue'/></p>
          <a href="https://www.linkedin.com/in/nitin-lohumi-1202562b3/" target="_blank" rel="noopener noreferrer">
            <span className={styles.contactItemText}>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
