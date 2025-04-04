import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <main className="h-screen flex">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
