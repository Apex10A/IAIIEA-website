import { Button } from '@/components/ui/button'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

export const GoogleSignIn = () => {
  return (
    <Button
      onClick={() => signIn('google', { callbackUrl: '/redirect' })}
      variant="outline"
      className="flex w-full gap-2 h-12 rounded-lg"
    >
      <FcGoogle size={24} />
      <span className="font-medium text-base text-[#344054]">
        Sign in with Google
      </span>
    </Button>
  )
}
