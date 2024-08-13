// import { FormFieldProps } from "@/lib/formtypes";

// const FormField: React.FC<FormFieldProps> = ({
//   type,
//   placeholder,
//   name,
//   register,
//   error,
//   valueAsNumber,
// }) => (
//   <>
  
//   <div className="w-full mb-4 max-w-full flex flex-col">
//       <input
//         className="border-2 rounded-lg p-2 w-full"
//         type={type}
//         placeholder={placeholder}
//         {...register(name)}
//       />
//       {error && (
//         <span className="error-message text-[10px] text-red-400 block mt-1 break-words w-[30px]">
//           {error.message}
//         </span>
//       )}
//     </div>
  
//   </>
// );
// export default FormField;
import React from 'react'
import { fieldProps } from '@/lib/formtypes';
const formField:React.FC<fieldProps>=({
    type,
    fullname,
    placeholder,
    error,
    register,
    valueAsNumber

})=>(
    <>
    <input className='border-2 p-2 md:p-3 m-2  md:w-[60%] w-[80%]  rounded-xl  ' type={type}  placeholder={placeholder} {...register(fullname, { valueAsNumber })} />
    {error && <span className="error-message text-red-600 text-sm ">{error.message}</span>}
    </>
)
export default formField;