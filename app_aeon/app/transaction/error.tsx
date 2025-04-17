"use client"

import ErrorMessage from "../components/Error"

export default function Error({message} : {message: string}) {
  return (
    <ErrorMessage message={message} />
  )
}
