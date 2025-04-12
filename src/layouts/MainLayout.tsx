import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <div className="inner-section w-full h-full flex flex-col overflow-y-auto px-4 md:px-10">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
