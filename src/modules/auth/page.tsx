'use client'

import { z } from 'zod'
import Link from 'next/link'
import { cn } from '@/utils'
import { countries } from "@/utils/countries";
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { GoogleSignIn } from './socialbutton'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState, useTransition } from 'react'
import { CreateUser, loginUser } from '@/action/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, RegisterSchema } from '@/schema'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeft, Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import "../../app/index.css";

export type PasswordStrength = 'weak' | 'medium' | 'strong'

export const LoginForm = () => {
  const [step, setStep] = useState(0); // Start at step 0
  const steps = ['Personal Information', 'Contact Information', 'Academic Information'];
  const [isLoading, startTransition] = useTransition()
  const router = useRouter()
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>(
    'password'
  )
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      uid: '',
      password: ''
    },
  })

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      
      await loginUser(values).then(async (res) => {
        const { uid, password  } = values
        if (res.status === 200) {
          await signIn('credentials', {
            uid,
            password,
            redirect: false,
          })
          router.push('/dashboard')
        }

        toast[res.status === 200 ? 'success' : 'error'](
          res.status === 200 ? 'Login success' : 'An error occurred',
          {
            description: res.status === 200 ? 'Redirecting' : res.message,
          }
        )
      })
    })
  }
  return (
  <div className=' min-h-screen background pt-28'>
      <Card className="md:w-[700px] md:px-32 sm:px-20 flex flex-col items-center justify-center max-h-[70%] w-full rounded-md shadow-none md:mx-auto py-5 transform">
      <CardHeader className="w-full">
        <div className="flex flex-col gap-8 items-center w-full">
          <Image src="/IAIIEA Logo.png" alt="logo" width={100} height={100} />
          <div className="flex flex-col text-center gap-[8px]">
            <h1 className="text-[#203A87] font-bold text-2xl md:text-4xl">
              Welcome Back
            </h1>
            <p className="text-[#393938] leading-[24px] text-lg max-w-[611px]">
              Kindly fill in your login details
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="gap-5 grid w-full">
        {/* <GoogleSignIn /> */}
        <div className="relative flex items-center justify-center">
          {/* <div className="absolute h-[1px] w-2/3 bg-[#555F74] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
          <span className="text-sm text-[#555F74] w-max px-5 bg-white z-10 relative">
            Or Signin with
          </span> */}
        </div>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="uid"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-md">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="uid"
                        type="text"
                        placeholder="Email or Membership ID"
                        required
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-md">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative w-full">
                        <Input
                          id="email"
                          type={defaultInpType}
                          placeholder="*******"
                          required
                          disabled={isLoading}
                          {...field}
                        />
                        <span className="absolute right-2 top-[50%] -translate-y-1/2 cursor-pointer">
                          {defaultInpType === 'text' ? (
                            <Eye
                              color="#000"
                              size={20}
                              onClick={() => setDefaultInpType('password')}
                            />
                          ) : (
                            <EyeOff
                              color="#000"
                              size={20}
                              onClick={() => setDefaultInpType('text')}
                            />
                          )}
                        </span>
                      </div>
                    </FormControl>
                    {/* <FormDescription>
                      <Link
                        href="/reset-password"
                        className="text-xs text-brand-primary font-bold"
                      >
                        Forgot Password?
                      </Link>
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
  type="submit"
  className="w-full h-12 mt-4 rounded-md bg-[#203A87]"
  disabled={
    !form.getValues().uid || !form.getValues().password || isLoading
  }
>
  {isLoading ? (
    <span className="flex items-center gap-x-2">
      <span className="animate-pulse">LOGGING IN...</span>{' '}
      <LoadingSpinner className="w-4 h-4 animate-smooth-spin sm:w-5 sm:h-5" />
    </span>
  ) : (
    <span className="text-md tracking-widest">LOGIN</span>
  )}
</Button>

            </div>
          </form>
        </Form>
        <div className="mt-2 text-center text-md text-[#646261]">
          Don&apos;t have an account?{' '}
          <Link
            href="/registerTwo"
            className="text-brand-primary text-md font-semibold"
          >
            Sign up
          </Link>
        </div>
        <Link
          href={'/'}
          className="mt-2 text-center text-md text-[#667085] flex flex-row items-center justify-center gap-2 font-medium"
        >
          <ChevronLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </CardContent>
    </Card>
  </div>
  )
}

export const SignUpForm = () => {
  const [isLoading, startTransition] = useTransition()
  const registrationTypes = [
    { value: "individual", label: "Individual" },
    { value: "institution", label: "Institution" },
  ];
  
  const professions = [
    { value: "professor", label: "Professor" },
    { value: "postgraduate", label: "Postgraduate" },
    { value: "lecturer_i", label: "Lecturer I" },
    { value: "lecturer_ii", label: "Lecturer II" },
    { value: "undergraduate", label: "Undergraduate" },
  ];
  

  const router = useRouter()
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>(
    'password'
  )
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
    f_name: '',
    m_name: '',
    l_name: '',
    type: "individual", // provide a default value from the allowed options
    profession: "professor", // provide a default value from the allowed options
    phone: '',
    email: '',
    postal_addr: '',
    country: '',
    qualifications: '',
    area_of_specialization: '',
    institution_name_addr: '',

    },
  })

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(async () => {
      await CreateUser(values).then(async (res) => {
        if (res.status === 201) {
          router.push('/loginTwo')
        }
        toast[res.status === 201 ? 'success' : 'error'](
          res.status === 201
            ? 'Account created successfully'
            : 'an error occurred',
          {
            description: res.status === 201 ? 'Redirecting' : res.message,
          }
        )
      })
    })
  }
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const [passwordStrength, setPasswordStrength] =
    useState<PasswordStrength>('weak')
  const [passwordFeedback, setPasswordFeedback] = useState<string>('')

  const calculatePasswordStrength = (password: string): PasswordStrength => {
    let feedback = ''

    if (password.length < 8) {
      feedback += 'Password should be at least 8 characters long. '
    }
    if (!/[A-Z]/.test(password)) {
      feedback += 'Add at least one uppercase letter. '
    }
    if (!/[0-9]/.test(password)) {
      feedback += 'Include at least one number. '
    }
    if (!/[!@#$%^&*]/.test(password)) {
      feedback += 'Use at least one special character (e.g., !@#$%^&*). '
    }

    setPasswordFeedback(feedback)

    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return 'strong'
    } else if (password.length >= 6) {
      return 'medium'
    } else {
      return 'weak'
    }
  }

  const strengthColor = {
    weak: 'bg-red-500',
    medium: 'bg-yellow-500',
    strong: 'bg-green-500',
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strength = calculatePasswordStrength(e.target.value)
    setPasswordStrength(strength)
    form.setValue('password', e.target.value)
  }

  return (
   <div className='background min-h-screen py-20'>
     <Card className="md:w-[900px] mx-auto md:px-32 sm:px-20  flex flex-col items-center justify-center min-h-[70%] w-full rounded-none shadow-none md:mx-auto py-5">
      <CardHeader className="w-full">
        <div className="flex flex-col gap-8 items-center w-full">
        <Image src="/IAIIEA Logo.png" alt="logo" width={100} height={100} />
          <div className="flex flex-col text-center gap-[8px]">
            <h1 className="text-[#203A87] font-bold text-2xl md:text-4xl">
            Become a member of IAIIEA
            </h1>
            <p className="text-[#393938] leading-[24px] max-w-[611px]">
            Join the IAIIEA organization to access exclusive membership offers
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="gap-5 grid w-full">
        <GoogleSignIn />
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[1px] w-2/3 bg-[#555F74] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
          <span className="text-sm text-[#555F74] w-max px-5 bg-white z-10 relative">
            Or Signup with
          </span>
        </div>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2 grid-cols-2">
              <FormField
                control={form.control}
                name="f_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                      First Name<span className="text-brand-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="f_name"
                        type="text"
                        placeholder="John"
                        required
                        {...field}
                        disabled={isLoading}
                       
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="m_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                      Middle Name<span className="text-brand-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="m_name"
                        type="text"
                        placeholder="Smith"
                        required
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="l_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                      Last Name<span className="text-brand-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="l_name"
                        type="text"
                        placeholder="Doe"
                        required
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
  control={form.control}
  name="type"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="font-medium text-[#1A1A1A] text-sm">
        Registration type<span className="text-brand-primary">*</span>
      </FormLabel>
      <Select 
        onValueChange={field.onChange} 
        defaultValue={field.value}
        disabled={isLoading}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select registration type" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {registrationTypes.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="profession"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="font-medium text-[#1A1A1A] text-sm">
        Select profession<span className="text-brand-primary">*</span>
      </FormLabel>
      <Select 
        onValueChange={field.onChange} 
        defaultValue={field.value}
        disabled={isLoading}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select your profession" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {professions.map((profession) => (
            <SelectItem key={profession.value} value={profession.value}>
              {profession.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>
              {/*contact infor starts here*/}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                      Mobile number<span className="text-brand-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="phone"
                        type="text"
                        placeholder="John"
                        required
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                      Email Address<span className="text-brand-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="postal_addr"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                      Postal address<span className="text-brand-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="postal"
                        type="text"
                        placeholder="John"
                        required
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
<FormField
  control={form.control}
  name="country"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="font-medium text-[#1A1A1A] text-sm">
        Country of domicile<span className="text-brand-primary">*</span>
      </FormLabel>
      <Select 
        onValueChange={field.onChange} 
        defaultValue={field.value}
        disabled={isLoading}
      >
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
  {countries.map((country) => (
    <SelectItem key={country.value} value={country.value}>
      {country.label}
    </SelectItem>
  ))}
</SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>

              {/*academic info starts here */}
              <FormField
                control={form.control}
                name="qualifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    qualifications<span className="text-brand-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="qualifications"
                        type="text"
                        placeholder="Degree"
                        required
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="area_of_specialization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    area_of_specialization<span className="text-brand-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="aos"
                        type="text"
                        placeholder="Course/Department"
                        required
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="institution_name_addr"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-[#1A1A1A] text-sm">
                    institution_name_addr<span className="text-brand-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="ina"
                        type="text"
                        placeholder="University of California"
                        required
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
                type="submit"
                className="w-full h-12 mt-4 rounded-md bg-[#203A87]"
                // disabled={isLoading || passwordStrength !== 'strong'}
              >
                {isLoading ? (
                  <span className="flex items-center gap-x-2">
                    <span className="animate-pulse">Signing up...</span>{' '}
                    <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                  </span>
                ) : (
                  <span>Signup</span>
                )}
              </Button>
          </form>
        </Form>
        <div className="mt-2 text-center text-xs text-[#646261]">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-brand-primary text-xs font-semibold"
          >
            Login
          </Link>
        </div>

        <Link
          href={'/'}
          className="mt-2 text-center text-sm text-[#667085] flex flex-row items-center justify-center gap-2 font-medium"
        >
          <ChevronLeft size={15} />
          <span>Back to Home</span>
        </Link>
      </CardContent>
    </Card>
   </div>
  )
}
