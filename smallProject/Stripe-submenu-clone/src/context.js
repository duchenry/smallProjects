import React, { useContext, useState } from "react";
import sublinks from "./data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const openSidebar = () => {
    return setIsSidebar(true);
  };
  const closeSidebar = () => {
    return setIsSidebar(false);
  };
  const [location, setLocation] = useState({});
  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenu(true);
  };
  const closeSubmenu = () => {
    setIsSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebar,
        isSubmenu,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
export const useGlobalContext = () => {
  return useContext(AppContext);
};
