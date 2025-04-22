import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <div className="inner-section ">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
