import { User } from '@prisma/client'
import { api } from 'utils/axios'

export async function createUser({ name, email, image }): Promise<User> {
  return api.post('/users/create', {
    name,
    email,
    image
  })
}
