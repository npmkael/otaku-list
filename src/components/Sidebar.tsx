import { navLinks } from "../constants/index";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="sidebar w-full h-full max-w-[300px] border-r border-r-gray-400/30 bg-[#F9FAFE] relative">
      <div className="px-10 py-4 flex flex-col">
        <h1 className="font-poppins text-2xl font-semibold h-[120px] flex items-center">
          OtakuList
          <span className="text-red-500">.</span>
        </h1>

        <div className="">
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
