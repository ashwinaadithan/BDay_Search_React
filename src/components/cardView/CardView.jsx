import UserCard from "./UserCard";

const CardView = ({ users }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <ul className="grid grid-cols-1 gap-6 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {users.map((user, i) => (
          <UserCard key={`user-${i}`} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default CardView;
