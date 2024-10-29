'use server'

import { z } from 'zod'
import { Calls } from './axios'
import {
  LoginSchema,
  OtpSchema,
  RegisterSchema,
  forgotPasswordSchema,
  newsLetterschema,
} from '@/schema'

const url = process.env.NEXT_PUBLIC_API_URL
const $http = Calls(url)

export const CreateUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      error: 'User Creating failed. Please check your email and password.',
    }
  }

  const { f_name: l_name, m_name, country, type, profession,  email, password, area_of_specialization, institution_name_addr, qualifications, postal_addr } = validatedFields.data

  const payload = { l_name, m_name, country, type, profession,  email, password, area_of_specialization, institution_name_addr, qualifications, postal_addr }

  try {
    const res = await $http.post('/register', payload)

    return {
      status: res.status,
      access_token: res.data.data.access_token,
    }
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    }
  }
}

export const verifyOtp = async (values: z.infer<typeof OtpSchema>) => {
  const otp = values.otp
  const token = values.token

  const payload = { otp: Number(otp), token: token }

  try {
    const res = await $http.post('/auth/verify-otp', payload)

    return {
      status: res.status,
      message: res.data.message,
    }
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    }
  }
}

// action/auth.ts
export const loginUser = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      error: 'Login Failed. Please check your email and password.',
    }
  }
  try {
    const res = await $http.post('/login', validatedFields.data)

    return {
      status: res.status,
      user: {
        data: res.data.data // Return the complete response data
      }
    }
  } catch (error: any) {
    return {
      message: error?.response?.data.message,
      status: error?.response?.status,
    }
  }
}

export const nextlogin = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      error: 'Login Failed. Please check your email and password.',
    }
  }

  try {
    const res = await $http.post('/login', validatedFields.data)

    return {
      user: res.data.data,
      access_token: res.data.access_token,
    }
  } catch (error: any) {
    return {
      message: error?.response?.data.message,
      status: error?.response?.status,
    }
  }
}

export const GOOGLE_SIGN_IN = async (id_token: string) => {
  try {
    const res = await $http.post('/auth/google', {
      id_token: id_token,
    })

    return {
      user: res.data.data,
      access_token: res.data.access_token,
    }
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    }
  }
}

export const ForgotPassword = async (
  values: z.infer<typeof newsLetterschema>
) => {
  const validatedFields = newsLetterschema.safeParse(values)
  if (!validatedFields.success) {
    return {
      message: 'Validation Failed. Please check your email',
    }
  }
  try {
    const res = await $http.post(
      '/auth/reset-password-request',
      validatedFields.data
    )
    return {
      status: res.status,
    }
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    }
  }
}

export const ResetPassword = async (
  values: z.infer<typeof forgotPasswordSchema>,
  token?: string
) => {
  const validatedFields = forgotPasswordSchema.safeParse(values)
  if (!validatedFields.success) {
    return {
      message: 'Validation Failed. Please check your check your INPUTS',
    }
  }
  try {
    const res = await $http.post(
      `/auth/reset-password?token=${token}`,
      validatedFields.data
    )
    return {
      status: res.status,
    }
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    }
  }
}
