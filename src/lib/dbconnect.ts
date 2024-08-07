import mongoose from 'mongoose'
 const dbUrl = process.env.MONGO_DB_URL as string 
export const  dbConnect = async()=>{
    try{
        await mongoose.connect(dbUrl)

    }catch(error){
        console.log("Error whole connecting to database" , error)
    }

}