"use client";
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/layout/sidebar/page';
import Notification from '@/components/dashboard/notification/Notification';
import Announcement from '@/components/dashboard/notification/Notification';
import ConferencePortal from '@/components/dashboard/conference/page';
import SeminarsWebinars from "@/components/dashboard/seminars/page";
import MembersDirectory from "@/components/dashboard/membersdirectory/page";
import PaymentsHistory from '@/components/dashboard/payment/PaymentHistory';
import Payment from '@/components/dashboard/payment/Payment'
import IAIIEAResources from '@/components/dashboard/resources/page';
import Gallery from '@/components/dashboard/gallery/page';
import Forum from "@/components/dashboard/forum/page";
import DashboardHeader from '@/components/layout/header/DashboardHeader';
import { useRouter } from 'next/navigation';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import Dashboard from "@/components/dashboard/dash/index"
import DashboardHeaderContainer from '@/components/layout/header/DashboardHeaderContainer';

interface UserData {
  status: string;
  message: string;
  data: {
    token: string;
    user_data: {
      f_name: string;
      l_name: string;
      m_name: string;
      phone: string;
      email: string;
      registration: string;
      membership_due_date: string;
    };
    pending_payments: Array<{
      title: string;
      payment_id: string;
      amount: number;
      currency: string;
      sub_payments: Array<any>;
    }>;
  };
}

const DashboardLayout = () => {
  const [activeComponent, setActiveComponent] = useState<string>('Dashboard');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user/me');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  // Check if registration is complete and there are no pending payments
  const hasPaid = userData?.data?.user_data?.registration === 'complete' && 
                  (!userData?.data?.pending_payments || userData.data.pending_payments.length === 0);

  const RestrictedAccess = () => {
    const pendingPayment = userData?.data?.pending_payments?.[0];

    return (
      <div className="flex flex-col items-center justify-center space-y-6 p-8">
        <Lock className="w-16 h-16 text-gray-400" />
        <Alert variant="warning" className="max-w-lg">
          <AlertTitle>Registration Incomplete</AlertTitle>
          <AlertDescription>
            {pendingPayment ? (
              <>
                Please complete your {pendingPayment.title.toLowerCase()} of{' '}
                {pendingPayment.currency.toUpperCase()} {pendingPayment.amount} to access all features.
              </>
            ) : (
              'Please complete your registration and payment to access all features.'
            )}
          </AlertDescription>
        </Alert>
        <Button
          onClick={() => router.push('/payment')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
        >
          Complete Payment
        </Button>
      </div>
    );
  };

  const renderComponent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      );
    }

    // Allow access to Dashboard and Payment without restrictions
    if (activeComponent === 'Dashboard' || activeComponent === 'Payment') {
      switch (activeComponent) {
        case 'Dashboard':
          return <Dashboard />;
        case 'Payment':
          return <Payment />;
        default:
          return <Dashboard />;
      }
    }

    // Check registration status and pending payments
    if (!hasPaid) {
      return <RestrictedAccess />;
    }

    // Render component if user has completed registration and payments
    switch (activeComponent) {
      case 'Announcement':
        return <Announcement />;
      case 'Conference Portal':
        return <ConferencePortal />;
      case 'Seminars/Webinars':
        return <SeminarsWebinars />;
      case 'Members Directory':
        return <MembersDirectory />;
      case 'Resources':
        return <IAIIEAResources />;
      case 'Gallery':
        return <Gallery />;
      case 'Forum':
        return <Forum />;
      default:
        return <SeminarsWebinars />;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        <p className='pt-3 font-500 opacity-[0.7]'>Preparing dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      <div className="flex flex-grow">
        <Sidebar 
          setActiveComponent={setActiveComponent} 
          restrictedAccess={!hasPaid}
        />
        <div className="flex-grow p-4 relative mt-24 px-10 bg-[#f9faff]">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;