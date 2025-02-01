import AboutComp from "@/component/AboutComp";
import Body from "@/component/Body";
import ProjectComp from "@/component/ProjectsComp";
import Resume from "@/component/Resume";
import { delay, motion } from "framer-motion";
function index() {
  return (
    <>
      <motion.div>
        <Body />
        <AboutComp />
        <ProjectComp />
        <Resume />
      </motion.div>
    </>
  );
}
export default index;
