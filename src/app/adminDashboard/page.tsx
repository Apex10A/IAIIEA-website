"use client";
import React, { useState } from 'react';
import Sidebar from '@/components/layout/sidebar/page';
import Notification from '@/components/dashboard/notification/Notification';
import Announcement from '@/components/admin/notification/page';
import ConferencePortal from '@/components/dashboard/conference/page';
import SeminarsWebinars from "@/components/dashboard/seminars/page";
import MembersDirectory from "@/components/dashboard/membersdirectory/page";
import PaymentsHistory from '@/components/dashboard/payment/PaymentHistory';
import Payment from '@/components/admin/payment/page'
import IAIIEAResources from '@/components/admin/resources/page';
import Gallery from '@/components/admin/gallery/page';
import Forum from "@/components/admin/news/page";
import DashboardHeader from '@/components/layout/header/DashboardHeader';
import Dashboard from "@/components/admin/home/dashboard"

const DashboardLayout = () => {
  const [activeComponent, setActiveComponent] = useState<string>('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard/>
      case 'Announcement':
        return <Announcement />;
      case 'Conference Portal':
        return <ConferencePortal />;
      case 'Seminars/Webinars':
        return <SeminarsWebinars />;
      case 'Members Directory':
        return <MembersDirectory />;
      case 'Payment':
        return <Payment />;
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

  return (
    <div className="flex flex-col h-screen">
      <DashboardHeader />
      
      <div className="flex flex-grow">
        <Sidebar setActiveComponent={setActiveComponent} />
        
        <div className="flex-grow p-4 relative mt-28 px-10 bg-[#f9faff]">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
