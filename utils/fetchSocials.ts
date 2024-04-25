"use server"

import { Social } from "@/typings";
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";


const query = groq`
*[_type=="social"] 
`



export const fetchSocials = async () => {
    try {
        const socials: Social[] = await sanityClient.fetch(query)
return socials
    } catch (error) {
        throw new Error('Failed to fetch data')
    }

}