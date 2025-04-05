import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

const MainLayout = () => {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col overflow-y-auto p-4 md:p-10">
        <Outlet />
      </div>
      <RightSidebar />
    </main>
  );
};

export default MainLayout;
