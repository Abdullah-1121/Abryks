import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { dbConnect } from "@/lib/dbconnect";
import User from "@/models/User";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise  from "@/lib/mogoclient";

import bcrypt from "bcryptjs";
export const authOptions : NextAuthOptions = {
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
                    GoogleProvider({
                        clientId: process.env.CLIENT_ID!,
                        clientSecret: process.env.CLIENT_SECRET!
                      }),

    ],
    callbacks:{
        async signIn({ user, account }) {
            await dbConnect();
      
            if (account && account.provider === 'google') {
              let existingUser = await User.findOne({ email: user.email });
              
      
              if (!existingUser) {
                try {
                  // Create user with default values for optional fields
                  await User.create({
                    name: user.name,
                    email: user.email,
                    username: user.email!.split('@')[0], // Example username
                    password: null, // No password needed
                  });
                  
                } catch (error) {
                  console.error('Error creating user:', error);
                 
                }
               
              }else{
                return existingUser
              }
            }
            return true; // Allow sign-in
          },
        async jwt({ token, user }) {
            if (user) {
              token._id = user._id;
            }
            return token
    },
    async session({ session, token }) {
        if(token){
        session.user._id = token._id,
        session.user.email = token.email
        }
        return session
    }
    
},

pages:{
    signIn:'/sign-in'
},
session:{
    strategy:"jwt"
},


}
// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuthOptions , { NextAuthOptions } from "next-auth"
// import NextAuth  from 'next-auth';
// import { dbConnect} from '@/lib/dbconnect'
// import User from "@/models/User";
// import bcrypt from 'bcryptjs'
// import GoogleProvider from "next-auth/providers/google";
// import { signIn } from "@/schemas/signin";
// export const authOptions : NextAuthOptions  = {
//     providers:[
//        CredentialsProvider({
//             id:"credentials",
//             name: 'Credentials',
//             credentials: {
//               email: { label: 'Email', type: 'text' },
//               password: { label: 'Password', type: 'password' },
//             },
//             async authorize(credentials:any):Promise<any>{
//                 await dbConnect();
//                 try{
//                 const user =     await User.findOne({
//                          email: credentials.identifier
//                     })
//                     if(!user){
//                         throw new Error ('No user found with this email')
//                     }
//                     const isPasswordCorrect = await bcrypt.compare(credentials.password , user.password);
//                     if(isPasswordCorrect){
//                         return user
//                     }else{
//                         throw new Error('Passowrd is incorrect')
//                     }


//                 }catch(error:any){
//                     throw new Error(error)
//                 }

//             }
//         }),
//         GoogleProvider({
//             clientId: process.env.CLIENT_ID,
//             clientSecret: process.env.CLIENT_SECRET
//           }),
//     ],
//     pages : {
//         signIn:'/sign-in'
//     },
//     session : {
//         strategy:'jwt'
//     },
//     callbacks : {

//         async jwt({ token, user }) {
//             if (user) {
//               token.id = user._id
//             }
//             return token
//     }
    


// }