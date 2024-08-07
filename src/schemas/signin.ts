import z from 'zod'
export const signIn = z.object({
    email : z.string().email('Invalid email'),
    password:z.string().min(6,'Password must be atl least 6 characters long')

})