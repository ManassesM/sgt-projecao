import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query

  await prisma.task.delete({
    where: { id: userId.toString() }
  })

  return res.status(200).json({})
}
