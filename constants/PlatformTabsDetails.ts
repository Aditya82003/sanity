import { StaticImageData } from "next/image"


type Details ={
    id:string,
    heading:string,
    content:string,
    points:string[],
    button:string,
    
}

export const PlatformTabs:Details[]=[
    {
        id:"Studio",
        heading:"The most flexible content workspace",
        content:"Sanity Studio provides content creators with tailored editing interfaces that match the unique ways content drives your business. Built as open-source, the Studio acts as a central hub for content creation and operations for your composable business.",
        points:["Deeply customizable content workspaces","Real-time collaboration and field-level history","Intelligent image cropping and scaling"],
        button:"Explore Sanity Studio",
      
    },
    {
        id:"APIs",
        heading:"An unparalleled developer experience",
        content:"Sanity APIs are the fabric of your composable content architecture. Integrate with best-in-breed technologies as they emerge to unleash innovation. Sync content between Content Lake and any source for unprecedented access, reuse, and efficiency.",
        points:["Precise, formulaic content query language","Customizable, serverless webhook payloads","Interoperable across your entire architecture"],
        button:"Explore Developer Docs",
   
    },
    {
        id:"Content Lake",
        heading:"Real-time, no-ops content storage & distribution",
        content:"Sanity Content Lake unites your enterprise around a single source of content truth. Content is synced, treated as data, and stored as JSON, making it readily available to power scalable multi-experience customer engagement.",
        points:["Cloud-hosted and fully-managed","Intelligent caching and global CDN","Robust mutation and patching interfaces"],
        button:"Explore Content Lake",
   
    }
] 