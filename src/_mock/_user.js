import { http, HttpResponse } from 'msw'
import { faker } from '@faker-js/faker'
import { UserApi } from '@/api/services/userService'
import { USERLIST } from './assets'

const signIn = http.post(`/api${UserApi.SignIn}`, async ({ request }) => {
  const { username, password } = await request.json()

  const user = USERLIST.find((item) => item.username === username)

  if (!user || user.password !== password) {
    return HttpResponse.json({
      status: 10001,
      message: 'Incorrect username or password.',
    })
  }
  return HttpResponse.json({
    status: 0,
    message: '',
    data: {
      user: {
        id: faker.string.uuid(),
        email: faker.internet.email(),
        username,
        avatar: faker.image.avatar(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.recent(),
      },
      accessToken: faker.string.uuid(),
      refreshToken: faker.string.uuid(),
    },
  })
})
export default [signIn]
