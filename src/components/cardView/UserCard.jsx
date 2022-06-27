const UserCard = ({ name, age }) => {
  return (
    <li className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="w-full text-gray-900 text-sm font-medium truncate">
              {name}
            </h3>
            <span className="w-full text-right inline-block px-2 py-0.5 text-gray-500 text-3xl font-medium">
              {age}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserCard;
