import NextAuth from "next-auth"
import google from "next-auth/providers/google"
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
 
const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [google, GitHub],
})