// 
import {FieldError , UseFormRegister} from 'react-hook-form'
export type fieldNames = {
    username:string,
    email: string,
    password:string,
    confirmPassword:string
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
 |"username"
 |"email"
 |"password"
 |"confirmPassword"