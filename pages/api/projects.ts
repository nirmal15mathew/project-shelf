// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Project {
    projectTitle: string,
    creationDate: Date,
    status: "active" | "pending" | "cancelled" | "completed",
    githubUrl?: string,
    websiteUrl?: string,
    coverImgLarge: string,
    coverImgMedium: string,
    keywords: string[],
    pid: string,
    authorUid: string
}

const exampleProjects: Project[] = [
  {
    projectTitle: "Timeline",
    creationDate: new Date(2021, 11, 23),
    status: "completed",
    coverImgLarge: "",
    coverImgMedium: "https://picsum.photos/200/300?random=1",
    keywords: ["svelte", "svelte-spa", "tailwindcss"],
    pid: "jd93dx02",
    authorUid: "k0wdf0c30"
  },
  {
    projectTitle: "Projects Shelf",
    creationDate: new Date(2022, 2, 8),
    status: "active",
    coverImgLarge: "",
    coverImgMedium: "",
    keywords: ["nextjs", "tailwindcss", "typescript", "heroicons"],
    pid: "sd0dwkmxs0",
    authorUid: "d0sjj930d"
  },
  {
    projectTitle: "Remote",
    creationDate: new Date(2021, 6, 5),
    status: "completed",
    coverImgLarge: "",
    coverImgMedium: "",
    keywords: ["svelte", "tailwindcss", "pwa"],
    pid: "cs9j3mdi9",
    authorUid: "29d2sxk0"
  }
]


async function getUserProjects(userId: string, authToken: string) {
  // fetch required data
  // return data
}

type Data = {
  projectsList: Project[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
      projectsList: [
        ...exampleProjects
      ]
  })
}
