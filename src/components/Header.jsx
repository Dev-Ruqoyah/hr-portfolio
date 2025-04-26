import { motion, useAnimation } from "framer-motion";

import React from 'react'

const Header = ({header}) => {
  return (
    <motion.h3
    className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500 mb-10"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
   {header}
  </motion.h3>
  )
}

export default Header