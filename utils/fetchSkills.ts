"use server"

import { Skill } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
*[_type=="skill"] 
`


export const fetchSkills = async () => {
    try {
        const skills: Skill[] = await sanityClient.fetch(query)
return skills
    } catch (error) {
        throw new Error('Failed to fetch data')
    }

}