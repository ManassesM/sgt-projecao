import { prisma } from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { taskId } = req.query

  const deletedTask = await prisma.task.delete({
    where: { id: taskId.toString() }
  })

  const tasks = await prisma.task.findMany({
    where: {
      userId: deletedTask.userId.toString()
    }
  })

  return res.status(200).json({ tasks })
}
