import {z} from 'zod'
export const signUpSchema = z.object({
    username : z.string().min(3,"Username must be atleast 3 characters"),
    email:z.string().email('Invalid email Address'),
    password:z.string().min(6, 'Password must be at least 6 characters long').regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, 'Password must contain at least one uppercase letter, one digit, and one special character'),
    confirmpassword:z.string().min(6, 'Password must be at least 6 characters long').regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/, 'Password must contain at least one uppercase letter, one digit, and one special character'),
}).refine((data)=>data.password == data.confirmpassword,
{
    message:"Passowrds do not match",
    path:['confirmpassword']
})