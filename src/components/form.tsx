'use client'
import { validFieldNames , fieldNames } from "@/lib/formtypes"
import {useForm} from 'react-hook-form'
import FormField from "./Formfield"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldSchemas } from "@/schemas/signup"
import Link from 'next/link'
import {FaGoogle} from "react-icons/fa"
import { useSession, signIn, signOut } from "next-auth/react"
function ContactForm(
    
){
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset
    } = useForm<fieldNames>({
        resolver:zodResolver(FieldSchemas)
    });
    const onSubmit = async (data:fieldNames)=>{
        try{
            let response = await fetch ('/api/sign-up',{
                method:'POST',
                headers:{
                  "Content-Type": "application/json",
                },
                body:JSON.stringify(data)
        
              });
              const responseData = await response.json();
              if(responseData.ok){
                alert('Submitted');
              }else{
                alert(responseData.error)
                console.log(responseData.error)
              }
      const {errors={}} = responseData;
      const fieldmappings:Record<string,validFieldNames>={

        username : "username",
        email:'email',
        password:'password',
        confirmPassword:"password"
      }
      const fieldwithError = Object.keys(fieldmappings).find(
        (field)=>errors[field]
      )
      if(fieldwithError){
        setError(fieldmappings[fieldwithError], {
          type: "server",
          message: errors[fieldwithError],
        });
      }
      reset()
     

        }catch(error){
            alert('Error submitting form'
            )
            console.log(error)


        }

    }
   
    return(
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
        <div className=" flex flex-col justify-center items-center md:w-[50%] lg:w-[40%] w-3/4 h-[500px] mx-auto  shadow-xl rounded-xl">
          <h1 className="md:text-3xl text-xl font-bold mb-4 text-primary-content ">
            Sign Up
          </h1>
          <FormField
            type="username"
            placeholder="Username"
            fullname="username"
            register={register}
            error={errors.username}
          />
          <FormField
            type="email"
            placeholder="Email"
            fullname="email"
            register={register}
            error={errors.email}
          />

          <FormField
            type="password"
            placeholder="Password"
            fullname="password"
            register={register}
            error={errors.password}
          />

          <FormField
            type="password"
            placeholder="Confirm Password"
            fullname="confirmPassword"
            register={register}
            error={errors.confirmPassword}
            
          />
           <button type="submit" className="  p-2 md:p-4 m-4 md:w-[70%] w-[80%] text-primary-dark rounded-xl  hover:shadow-xl hover:bg-blue-400 bg-blue-600 text-white ">
              Sign Up
            </button>
            <p className="mb-4 text-sm">Already have an account? <Link href='/' className="text-blue-600 underline">Log in</Link></p>
            <div  onClick={() => signIn("google",{callbackUrl:"/"})} className="bg-white p-2 flex justify-center md:w-[70%] w-[80%] items-center rounded-lg  text-blue-600 border-2 mb-4 border-blue-600 ">
                     <FaGoogle className="text-blue-600 m-2 "/><p className="text-md font-semibold hover:underline">Continue with Google</p>
          </div>
          </div>
        </form>
    )

}
export default ContactForm
// 'use client'
// import { useForm } from "react-hook-form";
// import { FormData } from "@/lib/formtypes";
// import FormField from "./Formfield";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {signUpSchema} from "@/schemas/signup";
// import {ValidFieldNames} from "@/lib/formtypes";
// import Link from 'next/link'
// import {FaGoogle} from "react-icons/fa"
// function Form() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//     reset
// } = useForm<FormData>({
//     resolver:zodResolver(signUpSchema)
// });
// const onSubmit = async (data:FormData)=>{
//   console.log('submitting data')
//     try{
//         let response = await fetch ('/api/contact',{
//             method:'POST',
//             headers:{
//               "Content-Type": "application/json",
//             },
//             body:JSON.stringify(data)
    
//           });
//           const responseData = await response.json();
//           console.log('Response Data:', responseData); 
//   const {errors={}} = responseData;
//   const fieldmappings:Record<string,ValidFieldNames>={
//     email:'email',
//     confirmPassword:'confirmPassword',
//     password:'password',

//   }
//   const fieldwithError = Object.keys(fieldmappings).find(
//     (field)=>errors[field]
//   )
//   if(fieldwithError){
//     setError(fieldmappings[fieldwithError], {
//       type: "server",
//       message: errors[fieldwithError],
//     });
//   }
//   reset()
//   alert('We have recieved your message.Thanks')

//     }catch(error){
//         console.log(error)


//     }

//   }

//   return (
//   <div className="border-2 border-black  h-screen flex justify-center items-center w-full">
//       <form onSubmit={handleSubmit(onSubmit)} className=" rounded-xl shadow-xl p-4 w-1/2 h-3/4 flex flex-col justify-center items-center">
//         <div className="flex flex-col justify-center items-center">
//           <h1 className="text-3xl font-bold mb-4 mt-4">
//             Sign Up
//           </h1>
          
//           <FormField
//             type="email"
//             placeholder="Email"
//             name="email"
//             register={register}
//             error={errors.email}
//           />
          

          

         
          
//           <FormField
//             type="password"
//             placeholder="Password"
//             name="password"
//             register={register}
//             error={errors.password}
//           />
         
        
//           <FormField
//             type="password"
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             register={register}
//             error={errors.confirmPassword}
//             />
         
//           <button type="submit" className=" mb-2 submit-button w-full bg-blue-600 border-2 border-blue-600 hover:bg-white hover:text-blue-600  rounded-lg text-white p-2">
            
//             Submit
//           </button>
//           <p  className="text-sm mb-4">Already have an account? <Link href='/' className="text-blue-600 underline">Log in</Link></p>
//           <p>or</p>
//           <div className="bg-white p-2 flex justify-center items-center rounded-lg  text-blue-600 border-2 mb-4 border-blue-600 ">
//           <FaGoogle className="text-blue-600 m-2 "/><p className="text-md font-semibold hover:underline">Continue with Google</p>
          
//           </div>
//         </div>
//       </form>
//       </div>
//   );
// }

// export default Form;