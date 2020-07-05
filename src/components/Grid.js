import React from "react";
import Item from "./Item";
import Spinner from "./Spinner";

const Grid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items &&
        items.map((item) => (
          // <h1 >{item.name}</h1>
          <Item key={item.char_id} item={item} />
        ))}
    </section>
  );
};

export default Grid;
