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
          `flex items-center justify-center md:justify-start gap-3.5 cursor-pointer py-4 group before:content-[''] before:absolute before:w-1 before:h-[30px] before:bg-red-500 md:before:-right-10 before:-right-4 transition-all duration-300 ${
            isActive ? "before:opacity-100" : "before:opacity-0"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-red-500"
                  : "text-gray-400 group-hover:text-white"
              }`}
            />
            <span
              className={`font-semibold transition-colors duration-300 hidden md:inline  ${
                isActive ? "text-white" : "text-gray-400 group-hover:text-white"
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
