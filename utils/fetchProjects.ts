"use server"

import { Project } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";

const query = groq`
*[_type == "gallery"] {
    name,
     images[] 
}
`


export const fetchProjects = async () => {
    try {
 const projects: Project[] = await sanityClient.fetch(query);
console.log("projject title", projects[0].title)
 return projects
    } catch (error) {
        throw new Error('Failed to fetch data')
    }

}