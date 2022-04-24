import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { id: activityId, title, description, priority, user } = req.body

  const founduser = await prisma.user.findUnique({
    where: {
      email: user.email
    }
  })

  await prisma.task.update({
    where: {
      id: activityId
    },
    data: {
      title,
      description,
      priority: Number(priority),
      userId: founduser.id
    }
  })

  const tasks = await prisma.task.findMany({
    where: {
      userId: founduser.id.toString()
    }
  })

  return res.status(200).json({ tasks })
}
