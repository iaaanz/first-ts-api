import { emailCodec } from '@/core/types/scalar'
import * as t from 'io-ts'

/**
 *  Explanation: t.TypeOf<typeof lalala>
 *
 *  Reutiliza o tipo do io-ts (t.type)
 *  usado na validação para criar
 *  o tipo base (User, Createuser)
 */

export const userCodec = t.type({
  email: emailCodec,
  token: t.string,
  username: t.string,
  bio: t.string,
  image: t.string,
})

export type User = t.TypeOf<typeof userCodec>

export const createUserCodec = t.type({
  username: t.string,
  email: emailCodec,
  password: t.string,
})

export type CreateUser = t.TypeOf<typeof createUserCodec>
