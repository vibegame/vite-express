import "./App.css";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = () => {
  return axios.get("/hello").then((res) => res.data);
};

function App() {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return fetchUsers();
    }
  });

  return <div></div>;
}

export default App;
