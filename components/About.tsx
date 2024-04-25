"use client"

import { urlFor } from "@/sanity"
import { PageInfo } from "@/typings"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 

type Props = {
  pageInfo: PageInfo
}

function About({
  pageInfo
}: Props) {
  return (
    <motion.div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px:4 lg:px-10 justify-evenly mx-auto items-center"
      initial={{
      opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5}}
    >
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> About</h3>

          {/* <motion.img
              initial={{
                  x: -200,
                  opacity: 0
              }}
              transition={{
                  duration: 1.2
              }}
              animate={{
                  
              }}
              whileInView={{ x: 0, opacity: 1}}
              viewport={{once: true}}
              src={urlFor(pageInfo?.profilePic).url()}
              className="hidden lg:block mb-20 md:mb-0 flefx-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          /> */}
          <div className=" lg:ml-8 p-6 mt-14  lg:border-solid lg:border-red-50 lg:border-2 w-full">
          <Tabs defaultValue="account" className="w-full" activationMode="manual">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Mission</TabsTrigger>
        <TabsTrigger value="password">Vision</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
       <ul>
        <li>Protection de l'environnement par le reboisement des especes exogenes et endogenes.</li>
        <li>Assurer les cours de cuisine amelioree aux femmes.</li>
        <li>Mise en valeur de l'Air non protege et l'interdiction sur la deforestation.</li>
        <li>Promouvoir l'agriculture durable.</li>
        <li>Echange des experiences en matieres agricole des nouvelles technologies avec des paysans et autres associations locales tant nationales qu'internationales et autres membres dans le domaine agricole.</li>
        <li>Renforcement des capacites aux agriculteurs.</li>
        <li>Protection des filles mere abandonnes et maintenance des enfants  orphelins a la scoralisation.</li>
       </ul>
      </TabsContent>
      <TabsContent value="password">
      <ul>
        <li>L'identification, la protection des forets naturelles, des especes endogenes envoie de disparition, reboisement  des differentes especes fruitieres et agro-forestieres, afin  de stabiliser l'ecosysteme(biodiversite) se trouvant sur l'etendue du territoire (Ville). En outre la diversification des nouvelles technologies agricoles pour la conservation du sol.</li>
        <li>Reintegration des categories des personnes marginalisees.</li>
       </ul>
      </TabsContent>
    </Tabs>
          </div>
    </motion.div>
  )
}

export default About