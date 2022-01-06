import Navbar from "./navbar/Navbar";
import Sidebar from "./navbar/Sidebar";
import "../styles/layout.module.css";
const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col bg-slate-900">
      <Navbar />
      {/* 사이더 네비게이션 시작 */}
      <div className=" relative min-h-screen flex mx-40">
        <Sidebar />
        <div>{children}</div>
      </div>
      {/* 사이더 네비게이션 시작 */}
    </div>
  );
};

export default Layout;
