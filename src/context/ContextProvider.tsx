import { createContext, useState, useEffect, type ReactNode, useContext } from "react";

type SidebarContextType = {
  isSidebarOpen: boolean;
  isSearchbarOpen: boolean;
  isChatbarOpen: boolean;
  toggleSidebar: () => void;
  toggleSearchbar: () => void;
  toggleChatbar: () => void;
  closeSidebar: () => void;
  closeSearchbar: () => void;
  closeChatbar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a ContextProvider");
  }
  return context;
};

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchbarOpen, setSearchbarOpen] = useState(false);
  const [isChatbarOpen, setChatbarOpen] = useState(false);
  // const [isCourseTracking, setCourseTracking] = useState(false);

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

  useEffect(() => {
    setSidebarOpen(window.innerWidth > 1200);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        isSearchbarOpen,
        isChatbarOpen,
        // isCourseTracking,
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
