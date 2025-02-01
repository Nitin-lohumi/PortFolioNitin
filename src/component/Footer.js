import { motion } from 'framer-motion';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <motion.div 
      className={styles.footerContainer}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className={styles.contact} id="contact">
        <h1 className={styles.contactHeading}>Contact</h1>

        <motion.div 
          className={styles.contactPage} 
          data-aos="zoom-in-up" 
          data-aos-duration="2000"
          initial={{ y: 100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div>
            <h2 className={styles.contactSubHeading}>
              <i className="fa-regular fa-address-card"></i> My Portfolio
            </h2>
            <p className={styles.contactPara}>
              Thanks for keeping your eyes here! <i className="fa-regular fa-face-smile-beam" style={{ color: '#FFD700' }}></i>
            </p>
            <p className={styles.contactPara}>
              <span>GitHub: </span>
              <a href="https://github.com/Nitin-lohumi" target="_blank" rel="noopener noreferrer">
                Nitin Lohumi <i className="fa-brands fa-github"></i>
              </a>
            </p>
          </div>

          <div>
            <h2 className={styles.contactSubHeading}>Follow Us</h2>
            <p className={styles.contactPara}>
              <i className="fa-solid fa-phone-flip"></i> Phone: 
              <a href="tel:+7417696780" target="_blank" rel="noopener noreferrer">7417696780</a>
            </p>
            <p className={styles.contactPara}>
              <i className="fa-brands fa-instagram"></i> Instagram: 
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Nitin Lohumi</a>
            </p>
            <p className={styles.contactPara}>
              <i className="fa-brands fa-telegram"></i> Telegram: 
              <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">Nitin</a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
