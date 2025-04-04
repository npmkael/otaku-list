import { NavLink } from "react-router-dom";

type Props = {
  name: string;
  path: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const ItemLink = ({ name, path, Icon }: Props) => {
  return (
    <li>
      <NavLink
        to={`${path}`}
        className={({ isActive }) =>
          `flex items-center gap-3.5 cursor-pointer py-4 group before:content-[''] before:absolute before:w-1 before:h-[30px] before:bg-red-600 before:-right-10  transition-all duration-300 ${
            isActive ? "before:opacity-100" : "before:opacity-0"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              size={20}
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-red-600"
                  : "text-slate-400 group-hover:text-red-600 "
              }`}
            />
            <span
              className={`font-semibold transition-colors duration-300 ${
                isActive
                  ? "text-neutral-950"
                  : "text-slate-400 group-hover:text-neutral-950 "
              }`}
            >
              {name}
            </span>
          </>
        )}
      </NavLink>
    </li>
  );
};

export default ItemLink;
