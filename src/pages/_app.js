import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/component/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useRouter } from "next/router";
import Footer from "@/component/Footer";
import { createContext,useState,useEffect} from "react"
import Head from "next/head";
export const AppContext = createContext();
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  // useEffect(()=>{
  //   document.body.style.zoom = "90%";
  // },[]);
  return (
    <>
      <AppContext.Provider value={{ isMobile, setIsMobile }}>
      <Head>
        <title>Portfolio_</title>
      </Head>
        <Header />
        <AnimatePresence mode="sync" style={{ overflow: "hidden" }}>
          <motion.div
            key={router.route}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            style={{ overflow: "hidden" }}
          >
            <Component {...pageProps} />
          </motion.div>
          <Footer />
        </AnimatePresence>
      </AppContext.Provider>
    </>
  );
}
