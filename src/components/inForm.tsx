'use client'
import { validFieldNames , fieldNames } from "@/lib/inFormtypes"
import {useForm} from 'react-hook-form'
import FormField from "./inFormfield"
import { zodResolver } from "@hookform/resolvers/zod"
import { signInschema } from "@/schemas/signin"
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
        resolver:zodResolver(signInschema)
    });
    const onSubmit = async (data:fieldNames)=>{
        try{
   
    const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
    });

    if (result?.error) {
        // Handle errors
        console.log(result.error);
        setError('email', {
            type: 'server',
            message: result.error,
        });
    } else {
        // Redirect to the homepage or another page
        window.location.href = '/';
    }

    reset();
     

        }catch(error){
            alert('Error submitting form'
            )
            // console.log(error)


        }

    }
   
    return(
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
        <div className=" flex flex-col justify-center items-center md:w-[50%] lg:w-[40%] w-3/4 h-[500px] mx-auto  shadow-xl rounded-xl">
          <h1 className="md:text-3xl text-xl font-bold mb-4 text-primary-content ">
            Sign In
          </h1>
        
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

          
           <button type="submit" className="  p-2 md:p-4 m-4 md:w-[70%] w-[80%] text-primary-dark rounded-xl  hover:shadow-xl hover:bg-blue-400 bg-blue-600 text-white ">
              Sign In
            </button>
            <p className="mb-4 text-sm">Dont Have an account? <Link href='/sign-up' className="text-blue-600 underline">Sign Up</Link></p>
            <div  onClick={() => signIn("google",{callbackUrl:"/"})} className="bg-white p-2 flex justify-center md:w-[70%] w-[80%] items-center rounded-lg  text-blue-600 border-2 mb-4 border-blue-600 ">
                     <FaGoogle className="text-blue-600 m-2 "/><p className="text-md font-semibold hover:underline">Login with Google</p>
          </div>
          </div>
        </form>
    )

}
export default ContactForm