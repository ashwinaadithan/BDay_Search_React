import { useEffect, useState } from "react";

import TableView from "./components/tableView/TableView";
import CardView from "./components/cardView/CardView";
import SortButton from "./components/filters/SortButton";
import Search from "./components/filters/Search";
import ViewSwitch from "./components/filters/ViewSwitch";

const App = () => {
  const [dataCopy, setDataCopy] = useState([]);
  const [users, setUsers] = useState([]);
  const [view, setView] = useState("table");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortNameDesc, setSortNameDesc] = useState(false);
  const [sortAgeDesc, setSortAgeDesc] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await (await fetch("http://localhost:4000/users")).json();
      setDataCopy(users);
      setUsers(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const searchUsers = () => {
      setUsers(
        dataCopy.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    };

    searchUsers();
  }, [dataCopy, searchTerm]);

  const toggleView = () => {
    setView((prev) => (prev === "table" ? "card" : "table"));
  };

  const sortUsersByName = () => {
    setUsers(
      users.sort((a, b) =>
        sortNameDesc
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name)
      )
    );
    setSortNameDesc(!sortNameDesc);
  };

  const sortUsersByAge = () => {
    setUsers(
      users.sort((a, b) => (sortAgeDesc ? b.age - a.age : a.age - b.age))
    );
    setSortAgeDesc(!sortAgeDesc);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div
          className="w-3/5"
          style={{
            minWidth: window.innerWidth >= 640 ? "350px" : "fit-content",
          }}
        >
          <Search
            value={searchTerm}
            handleOnChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="w-full inline-flex items-center justify-center sm:justify-end mt-4 sm:mt-0">
          <SortButton
            title="Name"
            descending={sortNameDesc}
            handleOnClick={sortUsersByName}
          />
          <SortButton
            title="Age"
            descending={sortAgeDesc}
            handleOnClick={sortUsersByAge}
          />
          <div className="ml-2">
            <ViewSwitch view={view} handleOnClick={toggleView} />
          </div>
        </div>
      </div>

      {view === "table" ? (
        <TableView users={users} />
      ) : (
        <CardView users={users} />
      )}
    </>
  );
};

export default App;
