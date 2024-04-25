"use server"

import { sanityClient } from "@/sanity";
import { Project } from "@/typings";
import { groq } from "next-sanity";

const query = groq`
*[_type == "gallery"]
`


export const fetchProjects = async () => {
    try {
 const projects: Project[] = await sanityClient.fetch(query);
 return projects
    } catch (error) {
        throw new Error('Failed to fetch data')
    }

}