import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { hashPassword } from '../../utils/auth';


const prisma = new PrismaClient()
const secret = process.env.AUTH_SECRET;


export async function register(req: Request) {
  try{
    const args = await req.json()

    const existingUser = await prisma.user.findFirst({
      where: {
        email: args.email
      }
    })

    if(existingUser){
      return new Response('User already exists', { status: 400 })
    }

    const hashedPassword = await hashPassword(args.password)


    const NewUser = await prisma.user.create({
      data: {
        name: args.name,
        email: args.email,
        password: hashedPassword
      }
    })

    
  



    console.log( args.name, args.email, args.password)
    return new Response('Hello, from API!');
  }catch(e){
    console.log(e)
  }
}