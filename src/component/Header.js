import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "@/pages/_app";
function Header() {
  const context = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  const [showHomeLink, setShowHomeLink] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const checkScreenSize = () => {
      // setIsMobile(window.innerWidth <= 768);
      context.setIsMobile(window.innerWidth <= 768)
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Hide "Home" link on homepage "/"
  useEffect(() => {
    setShowHomeLink(router.pathname !== "/");
  }, [router.pathname]);

  // Handle menu click & add "Home" link
  const handleLinkClick = () => {
    setShowHomeLink(true);
    setMenuOpen(false);
  };

  return (
    <motion.div
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "transparent",
      }}
      initial={{ y: "-100px", opacity: 0 }}
      animate={{ y: "0px", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Mobile Menu Button */}
      {context.isMobile && (
        <motion.div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            fontSize: "2rem",
            cursor: "pointer",
            zIndex: 150,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {menuOpen ? "✖" : "☰"}
        </motion.div>
      )}

      {/* PC Navigation Links (Right-Aligned) */}
      {!context.isMobile && (
        <motion.div
          style={{
            display: "flex",
            gap: "30px",
            marginLeft: "auto",
          }}
        >
          {/* Show "Home" only if not on "/" */}
          {showHomeLink && (
            <motion.div
              style={{
                fontSize: "1.4rem",
                cursor: "pointer",
              }}
              initial={{ opacity: 0, x: "50px" }}
              animate={{ opacity: 1, x: "0px" }}
              whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Link href="/">Home</Link>
            </motion.div>
          )}

          {["Project", "About", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              style={{
                fontSize: "1.4rem",
                cursor: "pointer",
              }}
              initial={{ opacity: 0, x: "50px" }}
              animate={{ opacity: 1, x: "0px" }}
              whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <Link href={`/${item.toLowerCase()}`} onClick={handleLinkClick}>
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Mobile Menu (Slide in from Left) */}
      <AnimatePresence mode="sync">
        {menuOpen && context.isMobile && (
          <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "250px",
              height: "100vh",
              background: "rgba(0,0,0,0.9)",
              display: "block",
              flexDirection: "column",
              alignItems: "start",
              padding: "20px",
              boxShadow: "5px 0px 15px rgba(255,255,255,0.2)",
            }}
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            {/* Home link in mobile menu */}
            {showHomeLink && (
              <motion.div
                style={{
                  fontSize: "1.8rem",
                  marginTop: "50px",
                  width: "100%",
                  borderBottom:"1px solid white",
                  paddingLeft: "10px",
                  color: "white",
                  cursor: "pointer",
                  display: "block" 
                }}
                whileHover={{ scale: 1.1, textShadow: "0px 0px 10px white" }}
                transition={{ duration: 0.3 }}
                onClick={handleLinkClick}
              >
                <Link href="/">Home</Link>
              </motion.div>
            )}

            {["Project", "About", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                style={{
                  fontSize: "1.8rem",
                  marginTop: "50px",
                  width: "100%",
                  paddingLeft: "10px",
                  color: "white",
                  cursor: "pointer",
                  borderBottom: "1px solid white",
                  display: "block" 
                }}
                whileHover={{ scale: 1.1, textShadow: "0px 0px 10px white" }}
                transition={{ duration: 0.3 }}
                onClick={handleLinkClick}
              >
                <Link href={`/${item.toLowerCase()}`}>{item}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Header;
