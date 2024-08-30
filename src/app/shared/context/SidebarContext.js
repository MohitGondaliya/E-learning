import { createContext, useContext, useState, useEffect } from "react";

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1200);
  const [isSearchbarOpen, setSearchbarOpen] = useState(false);
  const [isChatbarOpen, setChatbarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const toggleSearchbar = () => {
    setSearchbarOpen((prevState) => !prevState);
  };

  const toggleChatbar = () => {
    setChatbarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const closeSearchbar = () => {
    setSearchbarOpen(false);
  };

  const closeChatbar = () => {
    setChatbarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setSidebarOpen(false);
        setChatbarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        isSearchbarOpen,
        isChatbarOpen,
        toggleSidebar,
        toggleSearchbar,
        toggleChatbar,
        closeSidebar,
        closeSearchbar,
        closeChatbar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
