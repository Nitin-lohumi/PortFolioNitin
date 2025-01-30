import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <>
      <motion.div>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "1px 2px 2px grey",
            padding: "10px",
            overflow: "hidden",
          }}
          initial={{ scaleY: 0, y: "-100px" }}
          animate={{ scaleY: 1, y: "0px" }}
          transition={{ y: { duration: 1, delay: 0 } }}
        >
          <motion.h1
            style={{
              fontSize: "1.5rem",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
            initial={{ opacity: 0, scale: 1, x: "-200px" }}
            whileHover={{ boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)" }}
            animate={{ opacity: 1, scale: 1, x: "10px" }}
            transition={{
              opacity: { duration: 1, delay: 1 },
              x: { duration: 1, delay: 1 },
            }}
          >
          </motion.h1>
          <motion.div
           style={{
            display: "flex",
            justifyContent: "space-between",
            gap:"10px",
          }}
          >
            <motion.div
              style={{
                fontSize: "1.4rem",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "0.5rem",
              }}
              initial={{ opacity: 0, scale: 1, x: "200px" }}
              animate={{ opacity: 1, scale: 1, x: "-10px" }}
              whileHover={{ boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)" }}
              transition={{
                opacity: { duration: 1, delay: 1 },
                x: { duration: 1, delay: 1 },
              }}
            >
              <Link href={"/project"}>Projects</Link>
            </motion.div>

          <motion.div
              style={{
                fontSize: "1.4rem",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "0.5rem",
              }}
              initial={{ opacity: 0, scale: 1, x: "200px" }}
              animate={{ opacity: 1, scale: 1, x: "-10px" }}
              whileHover={{ boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)" }}
              transition={{
                opacity: { duration: 1, delay: 1 },
                x: { duration: 1, delay: 1 },
              }}
            >
              <Link href={"/about"}>About</Link>
            </motion.div>

            <motion.div
              style={{
                fontSize: "1.4rem",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "0.5rem",
              }}
              initial={{ opacity: 0, scale: 1, x: "200px" }}
              animate={{ opacity: 1, scale: 1, x: "-10px" }}
              whileHover={{ boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)" }}
              transition={{
                opacity: { duration: 1, delay: 1 },
                x: { duration: 1, delay: 1 },
              }}
            >
              <Link href={"/contact"}>contact</Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </>
  );
}

export default Header;
