import React from 'react';
import Header from "@/components/layout/header/page";
import LandingPage from "@/modules/external/landing-page/index";
import Media from "@/app/gallery/media/page"
import "./index.css";
import Footer from "@/components/layout/footer/page"
import DashboardHeader from '@/components/layout/header/DashboardHeader';
import Sidebar from '@/components/layout/sidebar/page';
import Conference from "@/components/dashboard/conference/page"
import TableSection from "@/components/dashboard/tableSection/TableSection"
import PaymentSuccessDashboard from '@/components/home/home/PaymentSuccessDashboard';
import Payment from '@/components/dashboard/payment/Payment';
import PaymentHistory from "@/components/dashboard/payment/PaymentHistory"
import Resources from "@/components/dashboard/resources/page"
import ConferenceLandingPage from '@/modules/external/conference-landing-page/page'

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen relative">
        <Header />
        <div className="flex-grow pt-[80px]">
          {/* <Media/>  */}
          <LandingPage />
          {/* <ConferenceLandingPage/> */}
        </div>
        <Footer/>
      </div>
    </>
  );
}
