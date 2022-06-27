import { BiTable } from "react-icons/bi";
import { TbLayoutList } from "react-icons/tb";

const ViewSwitch = ({ view, handleOnClick }) => {
  return (
    <div
      onClick={handleOnClick}
      className="p-2 rounded shadow-sm cursor-pointer"
    >
      {view === "table" ? (
        <TbLayoutList className="text-gray-500" size={20} />
      ) : (
        <BiTable className="text-gray-500" size={20} />
      )}
    </div>
  );
};

export default ViewSwitch;
