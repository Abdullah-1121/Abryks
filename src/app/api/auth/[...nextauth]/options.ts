import CredentialsProvider from "next-auth/providers/credentials";
import NextAuthOptions from 'next-auth'
import { dbConnect} from '@/lib/dbconnect'
import User from "@/models/User";
import bcrypt from 'bcryptjs'
import { signIn } from "@/schemas/signin";
export const authOptions ={
    providers:[
       CredentialsProvider({
            id:"credentials",
            name: 'Credentials',
            credentials: {
              email: { label: 'Email', type: 'text' },
              password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials:any):Promise<any>{
                await dbConnect();
                try{
                const user =     await User.findOne({
                         email: credentials.identifier
                    })
                    if(!user){
                        throw new Error ('No user found with this email')
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.password , user.password);
                    if(isPasswordCorrect){
                        return user
                    }else{
                        throw new Error('Passowrd is incorrect')
                    }


                }catch(error:any){
                    throw new Error(error)
                }

            }
        }),
        
    ],
    pages : {
        signIn:'/sign-in'
    },
    session : {
        strategy:'jwt'
    }
    


}