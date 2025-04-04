import { NavLink, Outlet } from "react-router-dom";

const Discover = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-4">
          {/* Active state for now */}
          <NavLink
            to={"/discover/animes"}
            className={({ isActive }) =>
              `text-xl font-medium cursor-pointer transition-colors duration-200 ease-in-out ${
                isActive
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-900"
              }`
            }
          >
            Animes
          </NavLink>

          <NavLink
            to={"/discover/mangas"}
            className={({ isActive }) =>
              `text-xl font-medium cursor-pointer transition-colors duration-200 ease-in-out ${
                isActive
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-900"
              }`
            }
          >
            Mangas
          </NavLink>
        </div>

        <Outlet />
      </div>
    </section>
  );
};

export default Discover;
