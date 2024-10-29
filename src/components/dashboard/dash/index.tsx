// app/dashboard/page.tsx
"use client"; // Ensures this is a Client Component

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSession, useSession } from 'next-auth/react';
import { DashboardContent } from '@/app/dashboard/DashboardContent';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (status === 'loading') return; // Wait for session data to load
    if (!session) router.push('/login'); // Redirect if no session

    if (session) {
      // Set user data once session is available
      setUserData({
        f_name: session.user.f_name,
        registration: session.user.registration,
      });
    }
  }, [session, status, router]);

  if (status === 'loading' || !userData) {
    return <p>Loading...</p>; // Show loading while waiting for session
  }

  return <DashboardContent user={userData} />;
}
