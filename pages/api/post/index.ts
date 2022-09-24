// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../utils/client';
import { allPostsQuery } from '../../../utils/queries';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    //This query is coming from queries.ts. Custom made queries we can call
    const query = allPostsQuery();

    //client is coming from client.ts. A file purely for configuration of the client information
    const data = await client.fetch(query);

    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const document = req.body;
    client.create(document).then(() => res.status(201).json('Video Created'));
  }
}
