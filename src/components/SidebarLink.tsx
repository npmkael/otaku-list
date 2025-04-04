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
    <div className="mb-8">
      <span className="text-sm text-gray-400">{category}</span>
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
    </div>
  );
};

export default SidebarLink;
