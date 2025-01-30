import "@/styles/globals.css";
import Header from "@/component/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait" style={{overflow:"hidden"}}>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.5,ease:"backInOut" }}
        style={{overflow:"hidden"}}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
    </>
  );
}
