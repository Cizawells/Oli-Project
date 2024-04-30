import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import Header from "@/components/header";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchPageInfos } from "@/utils/fetchPageInfos";
import { fetchProjects } from "@/utils/fetchProjects";


// import { fetchPageInfos } from "@/utils/fetchPageInfos";
import Link from "next/link";

export const runtime = "edge";

type Props = {
  pageInfos: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[]
}

// const fetchPageInfos = async () => {
//     // try {
//     //     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`);
//     //     const data = await res.json();
//     //     const pageInfos: PageInfo = data.pageInfos;
//     //     console.log("pageInfosss", pageInfos)
//     //     return pageInfos

//     // } catch (error) {
//     //     throw new Error('Failed to fetch data')
//     // }

//    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`);
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }

export default async function Home(
//   {
//   pageInfos,
//   experiences,
//   skills,
//   projects,
//   socials
// }:Props
) {
  const pageInfo: PageInfo = await fetchPageInfos();
  // console.log("pagggg", pageInfo)
  // const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  console.log("prooooo", projects)
  // const socials: Social[] =  await fetchSocials();

  return (  
  
    <div className="bg-[rgb(242,246,242)] text-black h-screen snap-y snap-mandatory overflow-scroll  overflow-y-scroll overflow-x-hidden z-50 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">

      <Header />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/> 
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      {/* <section id="skills" className="snap-start">
        <Skills skills={ skills} />
      </section> */}

    <section id="photos" className="snap-center">
        <WorkExperience projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo}/>
     </section>
     <Link href="#hero">
     <footer>
      <div>
        <p>Go to the top</p>
      </div>
     </footer>
     </Link>
    </div>
  );
}

