import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query

  const tasks = await prisma.task.findMany({
    where: {
      userId: userId.toString()
    }
  })

  return res.status(201).json({ tasks })
}
