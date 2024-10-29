'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { usePathname } from 'next/navigation'
// import User

interface StateContextProps {
  showMobileMenu: boolean
  openExternal: boolean
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
  swipeIndicator: boolean
  setSwipeIndicator: React.Dispatch<React.SetStateAction<boolean>>
  openOnboarding: boolean
  setOpenOnboarding: React.Dispatch<React.SetStateAction<boolean>>
  setShowExternal: React.Dispatch<React.SetStateAction<boolean>>
}

export const StateContext = createContext({} as StateContextProps)

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [openExternal, setShowExternal] = useState(false)
  const [swipeIndicator, setSwipeIndicator] = React.useState(false)
  const [handleSwipe, setHandleSwipe] = useState<number | null>(null)
  const [openOnboarding, setOpenOnboarding] = useState(false)
  const [onBoarded, setOnBoarded] = useLocalStorage<boolean>(
    'welcome-student',
    false
  )
  const [image, setImage] = useState<File | Blob | null>(null)
  const path = usePathname()

  const isAnyModalOpen = openOnboarding || onBoarded
  const anyMobileSidebarOpen = showMobileMenu || openExternal

  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator?.userAgent
    )
  }

  // temporarily signout all users
  useEffect(() => {
    const signOutUser = async () => {
      const signoutFlag = localStorage.getItem('signout')
      if (!signoutFlag && session?.user) {
        await signOut({
          callbackUrl: '/',
        })
        localStorage.setItem('signout', 'true')
      }
    }
    signOutUser()
  }, [session?.user])

  useEffect(() => {
    if (!isMobileDevice()) return
    const isSwiped = localStorage.getItem('swiped')
    if (isSwiped) {
      setSwipeIndicator(false)
      return
    }
    if (anyMobileSidebarOpen) {
      setSwipeIndicator(true)
    } else {
      setSwipeIndicator(false)
    }
  }, [anyMobileSidebarOpen])

  useEffect(() => {
    if (!isMobileDevice() || !('ontouchstart' in window)) return
    const handleSwipeStart = (e: TouchEvent) => {
      setHandleSwipe(e.changedTouches[0].screenX)
    }
    const handleSwipeEnd = (e: TouchEvent) => {
      if (handleSwipe !== null) {
        const swipeDis = e.changedTouches[0].screenX - handleSwipe
        const swipeThreshold = 70

        if (swipeDis < -swipeThreshold) {
          localStorage.setItem('swiped', 'true')
          console.log('first')
          setShowMobileMenu(false)
        }

        setHandleSwipe(null)
      }
    }

    window.addEventListener('touchstart', handleSwipeStart)
    window.addEventListener('touchend', handleSwipeEnd)
    return () => {
      window.removeEventListener('touchstart', handleSwipeStart)
      window.removeEventListener('touchend', handleSwipeEnd)
    }
  }, [handleSwipe])

  useEffect(() => {
    if (anyMobileSidebarOpen || isAnyModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMobileMenu(false)
        setShowExternal(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [anyMobileSidebarOpen, isAnyModalOpen])

  const value = useMemo(
    () => ({
      showMobileMenu,
      setShowMobileMenu,
      swipeIndicator,
      setSwipeIndicator,

      setOpenOnboarding,
      openOnboarding,
      setShowExternal,
      openExternal,
    }),
    [showMobileMenu, swipeIndicator, openOnboarding, openExternal]
  )

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

export const useStateCtx = () => {
  const ctx = useContext(StateContext)

  if (!ctx) {
    throw new Error('useStateCtx must be used within a StateContextProvider')
  }
  return ctx
}

export default StateContextProvider
