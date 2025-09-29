interface FilterTabsProps {
  categories: { key: string; name: string }[];
  activeCategory: string;
  setActiveCategory: (key: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="project-tabs flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => setActiveCategory(category.key)}
          className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors duration-200 md:text-base ${activeCategory === category.key ? "border-transparent bg-[#FF7E3E] text-white" : "border-black text-black hover:bg-gray-200"}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
