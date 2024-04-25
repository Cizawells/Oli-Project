"use client"

import { urlFor } from "@/sanity"
import { PageInfo } from "@/typings"
import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"
import homepagePic from "@/public/homepage_pic.jpg"

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi, The name's ${pageInfo?.name}`, "Guy-who-loves-cofee.tsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000
    })
  return (
      <div className="h-screen flex flex-row space-y-8 items-center justify-center text-center overflow-hidden p-8">
          {/* <BackgroundCircles /> */}
          
          <div className="div z-0 w-1/2">
              <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] font-semibold">{pageInfo?.name}</h2>
         <p className="text-start leading-6">Constitue en date du 05 octobre 2010, une association communautaire sans but lucratif, denomme ""ADIU"" qui est apolitique et non confessionel  entre les soussignes et futurs adherant au present status confermement  au decret loi n 004/2001 du 20 juillet 2001 portant dispositions generales applicables aux asbl et aux etablissements d'utilite publique en R.D Congo.</p>
              
          </div>

          <img
              className="relative  h-80  mx-auto object-cover w-1/2"
              src={urlFor(pageInfo?.heroImage).width(300).url()} alt="" />
    </div>
  ) 
}

export default Hero