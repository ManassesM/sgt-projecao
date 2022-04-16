import { v4 as uuid } from 'uuid'

type SignInRequestType = {
  email: string
  password: string
}

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount))

const user = {
  name: 'Mana Dev',
  email: 'mouramana6@gmail.com',
  avatar_url: 'https://github.com/ManassesM.png'
}

export async function signInRequest(data: SignInRequestType) {
  await delay()

  return {
    token: uuid(),
    user
  }
}

export async function recoverUserInformation() {
  await delay()
  return { user }
}
