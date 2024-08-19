import DashboardHeader from "@/layout/header/DashboardHeader";
import Sidebar from "@/layout/sidebar/page";
import Homer from "../components/home/home/page";
import "./index.css";
import Payment from "../components/payment/Payment";
import PaymentSuccessDashboard from "@/components/home/home/PaymentSuccessDashboard";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full">
        <DashboardHeader />
      </div>

      <div className="flex flex-grow">
        <div className="relative">
          <Sidebar />
        </div>
        
        <div className="flex-grow p-4 relative top-[50%] transform translate-y-[-30%]">
          <PaymentSuccessDashboard/>
        </div>
      </div>
    </div>
  );
}
