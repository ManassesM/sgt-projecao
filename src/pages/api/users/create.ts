import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { email, name, image } = req.body

  const users = await prisma.user.findMany()
  const hasUser = users.find(user => user.email === email)

  if (!hasUser) {
    await prisma.user.create({
      data: {
        email,
        name,
        image
      }
    })
  }
  return res.status(200).json({})
}
