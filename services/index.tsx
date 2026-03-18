import { api } from "@/lib/axios"

// LOGIN
export const LoginFn = async (data: {
  username: string
  password: string
}) => {
  try {
    const res = await api.post("/auth/signin", data)
    return res
  } catch (error: any) {
    console.log("LOGIN ERROR:", error?.response?.data)
    return null
  }
}

// REGISTER
export const RegisterFn = async (data: {
  firstName: string
  lastName: string
  email: string
  username: string
  password: string
}) => {
  try {
    const res = await api.post("/auth/signup", data)
    return res.data
  } catch (error: any) {
    console.log("REGISTER ERROR:", error?.response?.data)
    return null
  }
}