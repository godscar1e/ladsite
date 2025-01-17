import { getSession } from "next-auth/react";

export default async (req, res) => {
    const session = await getSession({ req });
    res.status(200).json(session);
};
