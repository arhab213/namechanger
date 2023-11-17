import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [Name, setname] = useState("");
  const getApi = async () => {
    let res = await axios.get("http://localhost:3000/name/");

    console.log(res.data);
    setname(res.data.object);
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <div>{Name}</div>
    </>
  );
}

export default App;
