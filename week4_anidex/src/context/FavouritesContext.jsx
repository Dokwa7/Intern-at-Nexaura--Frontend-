import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (anime) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === anime.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== anime.id);
      } else {
        return [...prev, anime];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}