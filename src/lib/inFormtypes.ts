// 
import {FieldError , UseFormRegister} from 'react-hook-form'
export type fieldNames = {
    
    email: string,
    password:string
   
}
export type fieldProps = {
    type:string,
    fullname:validFieldNames,
    placeholder:string,
    error?:FieldError,
    register:UseFormRegister<fieldNames>
    valueAsNumber?:boolean
}
 export type validFieldNames = 

 |"email"
 |"password"
 