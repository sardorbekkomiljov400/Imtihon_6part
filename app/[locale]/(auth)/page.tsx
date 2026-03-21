"use client"

import { Toaster } from "sonner"
import Login from "./Login/page"

const page = () => {
  return (
    <>
     <Toaster position="top-right"/>
     <Login/>
    </>
  )
}

export default page