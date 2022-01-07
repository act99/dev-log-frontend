import Navbar from "./navbar/Navbar";
import Sidebar from "./navbar/Sidebar";
import "../styles/layout.module.css";
import Image from "next/image";
import logo from "../images/logo.jpg";

const Layout = ({ children }: any) => {
  return (
    <div className="  w-full h-full">
      <Navbar />
      <div className=" flex flex-row bg-slate-900 z-1">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
