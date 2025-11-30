import { createContext, useState } from "react";

export const HymnContext = createContext();

export const HymnProvider = ({ children }) => {
  const [hymns, setHymns] = useState([]);

  // ADD HYMN
  const addHymn = (newHymn) => {
    setHymns((prev) => [...prev, newHymn]);
  };

  // EDIT HYMN
  const editHymn = (id, updatedHymn) => {
    setHymns((prev) =>
      prev.map((hymn) =>
        hymn.id === id ? { ...hymn, ...updatedHymn } : hymn
      )
    );
  };

  // DELETE HYMN
  const deleteHymn = (id) => {
    setHymns((prev) => prev.filter((hymn) => hymn.id !== id));
  };

  return (
    <HymnContext.Provider
      value={{
        hymns,
        addHymn,
        editHymn,
        deleteHymn,
      }}
    >
      {children}
    </HymnContext.Provider>
  );
};
