import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../utils/mongo";
type Body = {
  userID: string;
  isWallet: boolean;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return;

  const { userID, isWallet } = req.body as Body;
  await createUser(userID, isWallet);
  res.status(200).json({ message: "User created" });
}
