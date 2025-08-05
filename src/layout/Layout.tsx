import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "@mui/material";
import { useSidebar } from "../context/ContextProvider";
import type { ComponentType } from "react";

interface LayoutProps {
  component: ComponentType;
}

const Layout: React.FC<LayoutProps> = ({ component: Component }) => {
  const { isSidebarOpen, isSearchbarOpen, closeSearchbar, closeSidebar } = useSidebar();
  return (
    <div className="wrapper">
      <Sidebar />
      <main className={`main-content ${isSidebarOpen ? 'open' : ''}`}>
        <Header />
        <div className="content-wrapper">{Component && <Component />}</div>
        <Footer />
      </main>
      <Link href="/" className={`mat-overlayer d-lg-none ${isSidebarOpen || isSearchbarOpen ? 'open' : ''}`} onClick={(e) => { e.preventDefault(); closeSidebar(); closeSearchbar(); }} />
    </div>
  );
};

export default Layout;
