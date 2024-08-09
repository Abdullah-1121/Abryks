'use client'
import { useForm } from "react-hook-form";
import { FormData } from "@/lib/formtypes";
import FormField from "./Formfield";
import { zodResolver } from "@hookform/resolvers/zod";
import {signUpSchema} from "@/schemas/signup";
import {ValidFieldNames} from "@/lib/formtypes";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });
  
  const onSubmit = async (data: FormData) => {
    try{
        let response = await fetch ('/api/sign-up',{
            method:'POST',
            headers:{
              "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
    
          });
          const responseData = await response.json();
  const {errors={}} = responseData;
  const fieldmappings:Record<string,ValidFieldNames>={
    
    email:'email',
    password: "password",
     confirmPassword: "confirmPassword",
    
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
  alert('We have recieved your message.Thanks')

    }catch(error){
        alert('success!')


    }
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid col-auto">
          <h1 className="text-3xl font-bold mb-4">
            Sign Up
          </h1>
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />

          

         

          <FormField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />

          <FormField
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            register={register}
            error={errors.confirmPassword}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
  );
}

export default Form;