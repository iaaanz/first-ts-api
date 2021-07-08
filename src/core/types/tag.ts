import * as t from 'io-ts'

export const tagCoded = t.string

export type Tag = t.TypeOf<typeof tagCoded>
