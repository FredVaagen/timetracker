// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.status(500).json({ message: "Sorry, we only accept GET requests" });
  }
  res.status(200).json([]);
};
