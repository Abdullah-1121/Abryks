import React from 'react'
import { fieldProps } from '@/lib/inFormtypes';
const formField:React.FC<fieldProps>=({
    type,
    fullname,
    placeholder,
    error,
    register,
    valueAsNumber

})=>(
    <>
    <input className='border-2 p-2 md:p-2 m-2  md:w-[70%] w-[80%]  rounded-xl  ' type={type}  placeholder={placeholder} {...register(fullname, { valueAsNumber })} />
    {error && <span className="error-message text-center text-red-600 text-sm ">{error.message}</span>}
    </>
)
export default formField;