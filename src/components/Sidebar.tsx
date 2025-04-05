import { navLinks } from "../constants/index";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="right-sidebar w-full h-full md:max-w-[300px] max-w-[90px] border-r border-r-gray-400/30 bg-[#F9FAFE] relative">
      <div className="md:px-10 px-4 py-4 flex flex-col md:items-start items-center">
        <img src="/fav-icon.png" alt="" className="md:hidden h-10 w-11" />
        <h1 className="font-poppins text-2xl font-semibold h-[120px] hidden md:flex items-center">
          OtakuList
          <span className="text-primary">.</span>
        </h1>

        <div className="divider h-px w-full bg-neutral-300/50 mt-4 md:hidden block" />

        <div className="w-full ">
          {navLinks.map((item, index) => (
            <SidebarLink
              key={item.category}
              category={item.category}
              subCat={item.subCat}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
