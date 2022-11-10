import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  email: string
  status: 'success' | 'error'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password, pfpUrl } = req.body
  console.log(req.body)

  // TODO: Add user to database

  res.status(200).json({ email, status: 'success' })
}
