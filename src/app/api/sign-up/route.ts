import { NextRequest , NextResponse } from "next/server";
import {dbConnect} from '../../../lib/dbconnect'
import User from '../../../models/User'

export async function POST ( req : NextRequest){
    const data = await req.json();
    console.log(data)
    // const {email , password} = data;
    // console.log(email , password)
    // try{
    //     await dbConnect()
    //     const exisitngUser = await User.findOne({email});
    //     if(exisitngUser){
    //         return NextResponse.json('User already exists');
    //     }
    //     const newUser = new User({
    //         email,
    //         password
    //     })
    //         console.log(newUser)
        
        


    // }catch(error){
    //     console.log(error)
    // }
    return NextResponse.json('success')
}