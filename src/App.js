import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./component/Card";

function App() {
  const [num, setNum] = useState();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  const handleSubmit = () => {
    if (num > 0 && num < 13) {
      setError(false);
      const fetchData = async () => {
        const res = await axios
          .get(`https://reqres.in/api/users/${num}`)
          .then((res) => setUsers([res.data.data]));
      };
      fetchData();
    } else {
      setError(true);
      setNum("");
    }
  };

  return (
    <div className="App">
      <div className="inputBox">
        <input
          type="number"
          placeholder="Enter the Employee code..."
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <button onClick={handleSubmit}>Search</button>
      </div>
      {error ? (
        <span className="error">Employee Id does not exist!</span>
      ) : (
        users.length > 0 &&
        users.map((user) => (
          <Card
            first_name={user.first_name}
            last_name={user.last_name}
            avatar={user.avatar}
            email={user.email}
          />
        ))
      )}
    </div>
  );
}

export default App;
