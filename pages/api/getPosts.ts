import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../prisma/client";

// interface Data {
//   id: number;
//   title: string;
//   content: string;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const data = await prisma.user.findMany();
      console.log(data);
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
