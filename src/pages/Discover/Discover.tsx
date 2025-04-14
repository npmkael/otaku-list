import { NavLink, Outlet } from "react-router-dom";

const Discover = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-2.5">
        <Outlet />
      </div>
    </section>
  );
};

export default Discover;
