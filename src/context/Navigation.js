import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.currentPath);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.currentPath);
    };

    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  }

  return <NavigationContext.Provider value={{ currentPath, navigate }}> {children} </NavigationContext.Provider>
}

export { NavigationProvider };
export default NavigationContext;