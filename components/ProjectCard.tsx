"use client"


import { urlFor } from "@/sanity"
import { Project } from "@/typings"
import { motion } from "framer-motion"
import Link from "next/link"

type Props = {
    project: any
}

function ProjectCard({
    project,
}: Props) {
  return (
      <article className="flex flex-col justify-center items-center  space-y-7 flex-shrink-0 w-[200px] md:w-[300px] xl:w-[400px] snap-center hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidde " key={project._id}>
          <motion.img
              initial={{
                  y: -100,
                  opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{once: true}}
              className="w-32 h-32 rounded-sm xl:w-[300px] xl:h-[300px] object-cover object-center"
              src={urlFor(project).url()}
              alt="image"
          />
      
    </article>
  )
}

export default ProjectCard