"use client"

import { signIn } from "next-auth/react"

export default function page() {
  return  <button onClick={() => signIn("github")}>github</button>
}
