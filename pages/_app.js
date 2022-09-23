import Header from "../components/header/header";
import Filter from "../components/filter/filter";
import Show from "../components/show/show";
import Properties from "../components/properties/properties";
import Selected from "../components/selected/selected";
import Footer from "../components/footer/footer";

import { useState, createContext } from "react";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "../styles/slider.css";

export const DataContext = createContext();

function MyApp() {
  const [filter, setFilter] = useState({
    status: 0,
    keyword: "",
    baths: -1,
    beds: -1,
    type: "default",
    orderBy: -1,
    price: [0, 1e8],
    size: [0, 1e8],
    selected: 0,
  });

  return (
    <DataContext.Provider value={{ filter: filter, setFilter: setFilter }}>
      <Header />
      <Filter />
      <Show />
      <Properties />
      <Selected selectId={filter.selected} />
      <Footer />
    </DataContext.Provider>
  );
}

export default MyApp;
