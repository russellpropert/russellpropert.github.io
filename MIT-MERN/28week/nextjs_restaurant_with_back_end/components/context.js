import { createContext } from "react";

const AppContext = createContext(
  {
    user: null,
    isAuthenticated: false,
    setUser: () => {},
    cart: {
      items: [],
      total: 0
    },
    addItem: () => {},
    removeItem: () => {}
  }
);

export default AppContext;