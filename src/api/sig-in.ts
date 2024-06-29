import { api } from '@/lib/axios'

export interface SigInBody {
  email: string
}

export async function sigIn({ email }: SigInBody) {
  await api.post('/authenticate', {
    email,
  })
}
