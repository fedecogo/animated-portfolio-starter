import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <Outlet context={[sidebarOpen, setSidebarOpen]} />
    </>
  );
};

export default Layout;
