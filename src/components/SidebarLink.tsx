import ItemLink from "./ItemLink";

type Props = {
  category: string;
  subCat: {
    name: string;
    path: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
  }[];
};

const SidebarLink = ({ category, subCat }: Props) => {
  return (
    <div className="">
      <span className="text-sm text-gray-400 hidden md:inline">{category}</span>
      <ul className="flex flex-col justify-center gap-4 mt-2.5">
        <div className="relative">
          {subCat.map((item) => (
            <ItemLink
              key={item.name}
              name={item.name}
              path={item.path}
              Icon={item.Icon}
            />
          ))}
        </div>
      </ul>

      <div className="divider h-px w-full bg-neutral-300/50 mt-4 md:hidden block" />
    </div>
  );
};

export default SidebarLink;
