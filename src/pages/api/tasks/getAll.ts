import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body

  const tasks = await prisma.task.findMany({
    where: {
      userId: id
    }
  })

  return res.status(200).json({ tasks })
}
