import Body from "@/component/Body";
import ProjectComp from "@/component/ProjectsComp";
import { delay, motion } from "framer-motion";
function index() {
  return (
  <>
   <motion.div>
      <Body/>
      <ProjectComp/>
    </motion.div>
  </>
  );
}
export default index;
