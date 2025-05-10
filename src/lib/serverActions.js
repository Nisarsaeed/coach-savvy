'use server';

import { signIn, auth} from "@/auth";


export async function handleSignIn() {
  await signIn('discord', { callbackUrl: "/checkout" })
}

export async function getUserAuth() {
  const res = await auth();
  if(!res){
    return false
  }
  return res
}

