import { NextRequest , NextResponse } from "next/server";
import {dbConnect} from '../../../lib/dbconnect'
import User from '../../../models/User'
import bcrypt from 'bcryptjs'
import {listIndexes} from '@/lib/dbremove'
export async function POST(req: NextRequest) {
    const data = await req.json();
    const { email, password } = data;

    try {
        await dbConnect();
         await listIndexes();

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists' + existingUser)
            return NextResponse.json({ error: 'User already exists' }, { status: 400 });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            email,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        // Return success response without password
        return NextResponse.json({ message: 'User created successfully', user: { email: newUser.email, _id: newUser._id } }, { status: 201 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'An error occurred while creating the user' }, { status: 500 });
    }
}