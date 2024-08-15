import { fieldNames } from "../lib/formtypes";
import { z , ZodType} from 'zod'
export const FieldSchemas:ZodType<fieldNames> = z.object({
    username:z.string().min(4,'Username must be at least 4 characters long'),
    
    email:z.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'Invalid email'),
    password:z.string().min(6,'Password must be atl least 6 characters long'),
    confirmPassword:z.string()
    
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
  })