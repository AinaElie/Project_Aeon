"use client"

import ErrorMessage from "../components/transaction/Error"

export default function Error({message} : {message: string}) {
  return (
    <ErrorMessage message={message} />
  )
}
