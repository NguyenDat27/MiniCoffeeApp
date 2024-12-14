import searchIcon from "../static/search.png";

const Search = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center border border-[#b9bdc1] rounded-lg">
        <button className="w-12 h-12 flex items-center justify-center rounded-l-lg">
          <img
            className="w-6 h-6"
            src={searchIcon}
            alt="Search Icon"
          />
        </button>
        <input
          className="flex-grow border-none px-3 py-2 rounded-r-lg outline-none"
          placeholder="Tìm nhanh đồ uống, món mới ..."
        />
      </div>
    </div>
  );
};

export default Search;
