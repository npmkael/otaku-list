import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <div className="inner-section ">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
