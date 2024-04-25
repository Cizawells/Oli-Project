"use server"

import { PageInfo } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";


const query = groq`
*[_type=="pageInfo"][0]
`

export const fetchPageInfos = async () => {
    try {
        const pageInfos: PageInfo = await sanityClient.fetch(query)
        return pageInfos

    } catch (error) {
        throw new Error('Failed to fetch data')
    }
}