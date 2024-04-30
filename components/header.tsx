"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"


const Header = ({
}) => {
  return (
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-white">
      <motion.div className="flex flex-row items-center"
        initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
     
      >
       <div className="pt-5">
                  <Link href="#about">
                  <button className="heroButton">A Propos</button>
                  </Link>
                  <Link href="#skills">
                  <button className="heroButton">Videos</button>
                  </Link>
                  <Link href="#photos">
                  <button className="heroButton">Photos</button>
                  </Link>
                  <Link href="#contact">
                  <button className="heroButton">Contact Me</button>
                  </Link>
          </div>
              
      </motion.div> 
      <Link href="#contact">
      <motion.div className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
           animate={{
          x: 0,
             opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hiden md:inline-flex text-sm text-gray-400">Get In Touch</p>
      </motion.div>
      </Link>
    </header>
  )
}

export default Header