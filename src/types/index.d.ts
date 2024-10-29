import { Session, type DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export type NavbarLinkProps = {
  id?: number
  link: string
  label: string
}

export type CloudinaryAsset = {
  url: string
}

export interface User {
  id?: string
  role?: string[]
  email?: string
  image_url?: string
  f_name?: string
  l_name?: string
  user_id: string
  type?: string
  profession?: string
  phone?: string
  postal?: string
  country?: string
  qualifications?: string
  ina?: string
  aos?: string
  is_parent: boolean
  is_teacher: boolean
}

export interface CustomJWT extends JWT {
  name: string
  email: string
  picture: string
  id: string
  f_name: string
  l_name?: string
  role: string[]
  image_url?: string
  access_token?: string
  emailVerified: boolean
  user_id?: string
  is_parent: boolean
  is_teacher: boolean
  google_login?: boolean
}

export interface PageProps {
  searchParams: {
    [key: string]: string | undefined
  }
}

export interface Conversation {
  id: string
  created_at: string
  updated_at: string
  topic: string
  responses: Response[]
  subject: string | null
  status: 'not_started' | 'ongoing' | 'completed'
}

export type Message = {
  text: string
  sender: 'user' | 'ai'
  time: string
  imageUrl?: string
  isLoading?: boolean
  id?: string
}

export interface Response {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  prompt: string
  response: string
  topic: string
  image: string | null
}

export interface PageProps {
  searchParams: {
    [key: string]: string | undefined
  }
}

export interface HomeworkQuestions {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  topic: string
  homework_id: string
  subject: string
  status: 'not_started' | 'ongoing' | 'done'
  preference: string | null
  questions: Response[]
}

export interface Homework {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  user_id: string
  status: 'pending' | 'inprogress' | 'completed'
  subject: string
  questions: HomeworkQuestions[]
}

export interface Blog {
  id: string
  title: string
  content: string
  author: string
  published_date: string
  category: string
  target_audience: string[]
  image_url: string
  additional_content: string
}
