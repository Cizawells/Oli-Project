"use client"

import { Skill as SkillType } from "@/typings"
import { motion } from "framer-motion"
import Skill from "./Skill"
import VideoPlayer from "./videoplayer"

type Props = {
  skills: SkillType[]
}

function Skills({
  skills
}: Props) {
  return (
      <motion.div 
      initial={{
        opacity: 0
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5}}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center pt-20">
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">VIDEOS</h3>

      <div className="grid grid-cols-3 gap-20">
      
          
        {[1,2]?.map((skill) => (
          // <Skill  skill={skill} directionLeft/>
          <VideoPlayer/>

        ))}
          
          </div>
    </motion.div>
  )
}

export default Skills