import React from 'react'
import ProjectComp from '@/component/ProjectsComp'
import { motion } from 'framer-motion';
function project() {
  return (
    <>
    <motion.div>
        <ProjectComp/>
    </motion.div>
    </>
  )
}

export default project;