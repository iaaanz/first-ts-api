import { Email } from './email'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

it('Deveria validar o email corretamente', () => {
  pipe(
    'ian@email.com',
    Email.decode,
    E.map(result => expect(result).toBe('ian@email.com')),
  )
})

it('Deveria retornar um erro quando o email for inválido', () => {
  pipe(
    'invalid-email',
    Email.decode,
    E.mapLeft(error => expect(error[0]?.message).toBe('Invalid email')),
  )
})
