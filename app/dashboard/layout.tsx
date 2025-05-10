import React from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen flex'>
      <div className='max-w-64 h-screen'>
        <Sidebar />
      </div>
      <div className='flex-1 w-full ml-0'>
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
