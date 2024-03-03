import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserList = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [term, setTerm] = useState<string>("");
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const result = await res.json();
      setUsers(result);
    }
    fetchUser();
  }, []);
  const filterUser = users
    .filter(({ name }) => name.indexOf(term) >= 0)
    .map((user) => {
      return (
        <div key={user.id}>
          <strong>{user.name}</strong>
        </div>
      );
    });

  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter Name"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      <h1>UserList</h1>
      <div>{filterUser}</div>
    </div>
  );
};

export default UserList;
