import { createContext, useCallback, useState } from "react";

const NavigateContect = createContext();

const NavigationContextProvider = ({ children }) => {
  const [pages, setPages] = useState([]);

  const addPages = useCallback((page) => {
    setPages((pages) => [...pages, page]);
  });

  const removePage = useCallback(
    (page) => {
      setPages((pages) => pages.filter((P) => P.name !== page.name));
    },
    [setPages]
  );

  const value = { addPages, pages, removePage };

  return (
    <NavigateContect.Provider value={value}>
      {children}
    </NavigateContect.Provider>
  );
};
