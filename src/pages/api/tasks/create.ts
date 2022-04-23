import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { title, description, priority, user } = req.body

  const founduser = await prisma.user.findUnique({
    where: {
      email: user.email
    }
  })

  await prisma.task.create({
    data: {
      title,
      description,
      priority: Number(priority),
      userId: founduser.id
    }
  })

  return res.status(200).json({})
}
