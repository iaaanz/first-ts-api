import * as TE from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/function'
import { CreateUser } from '@/core/types/user'
import { register, OutsideRegister } from './register'
import { unsafeEmail } from '@/config/tests/fixtures/index'

const registerOk: OutsideRegister<string> = async (data) => {
  return `Usuário ${data.username} cadastrado com sucesso`
}

const data: CreateUser = {
  username: 'Ian',
  email: unsafeEmail('ian@teste.com'),
  password: 'ian123',
}

it('Cadastrar um usuário com sucesso', async () => {
  return pipe(
    data,
    register(registerOk),
    TE.map(
      result => expect(result).toBe(`Usuário ${data.username} cadastrado com sucesso`),
    ),
  )()
})
