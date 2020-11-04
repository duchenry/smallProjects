import React, { useState } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";
function App() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if ((category === "all")) {
      return setMenuItems(items);
    }
    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;