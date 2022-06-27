import { BsSortNumericDownAlt, BsSortNumericUpAlt } from "react-icons/bs";

const SortButton = ({ title = "Items", descending = false, handleOnClick }) => {
  return (
    <button
      type="button"
      onClick={handleOnClick}
      className="inline-flex items-center mx-2 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      Sort By {title}
      {descending ? (
        <BsSortNumericDownAlt className="ml-2" size={20} />
      ) : (
        <BsSortNumericUpAlt className="ml-2" size={20} />
      )}
    </button>
  );
};

export default SortButton;
