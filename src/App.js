import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Search from "./components/Search";

const App = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, SetQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      setItems(result.data);
      setData(result.data);
      setLoading(false);
    };
    fetchItems();
  }, [query]);

  // filter data from stored dataset
  const filterData = (query) => {
    if (query === "" || query == null) {
      setItems(data);
    } else {
      const data = items.filter((v) => {
        return v.name.toLowerCase().includes(query);
      });
      setItems(data);
    }
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => SetQuery(q)} />
      <Grid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
