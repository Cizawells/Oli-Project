"use client"

import { motion } from "framer-motion";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ImageViewer from "./image-viewer";

type Props = {
  projects: any[]
}

const images: any[] = [
  
];



function WorkExperience({
  projects
}: Props) {

  console.log("proooo", projects)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleOnClicked = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex].src as string);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex].src as string);
    setCurrentImageIndex(prevIndex);
  };


  return (
      <motion.div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
      initial={{
        opacity: 0
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5}}
        >
           {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
          onNext={handleNextImage}
          onPrev={handlePreviousImage}
        />
      )}
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
              PHOTOS
          </h3>
          <div className="w-full flex space-w-2 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
              
              {/* {projects.map((project) => (
                <ProjectCard  project={project} />
              ))} */}
              {/* <div className="flex flex-row flex-wrap gap-3 justify-center px-3 md:px-0"> */}
        {projects[0].images.map((image:any, index: any) => (
          // <Image
          //   key={index}
          //   {...image}
          //   className="border-4 border-solid border-blue-900  w-40 cursor-pointer hover:border-blue-500"
          //   onClick={() => handleOnClicked(image.src as string, index)}
          // />
          <ProjectCard  project={image} key={index} />
        ))}

        {/* </div> */}
              
        
          </div>
    </motion.div>
  )
}

export default WorkExperience