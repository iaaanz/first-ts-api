import { emailCodec } from './email'
import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
// import { mapAll } from '@/config/tests/fixtures'

it('Deveria validar o email corretamente', () => {
  pipe(
    'ian@email.com',
    emailCodec.decode,
    E.map(result => expect(result).toBe('ian@email.com')),
  )
})

it('Deveria retornar um erro quando o email for inválido', () => {
  pipe(
    'invalid-email',
    emailCodec.decode,
    E.mapLeft(error => expect(error[0]?.message).toBe('Invalid email')),
  )
})
