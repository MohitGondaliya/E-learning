import Footer from "../components/Footer";
import type { ComponentType } from "react";
import TrackHeader from "../components/TrackHeader";

interface TrackingLayoutProps {
    component: ComponentType;
}

const TrackingLayout: React.FC<TrackingLayoutProps> = ({ component: Component }) => {
    // const { isSidebarOpen, isSearchbarOpen, closeSearchbar, closeSidebar } = useSidebar();

    return (
        <>
            <title>Course Tracking</title>
            <div className="wrapper track-wrapper">
                <main className={`main-content`}>
                    <TrackHeader />
                    <div className="content-wrapper">{Component && <Component />}</div>
                    <Footer />
                </main>
                {/* <Link href="/" className={`mat-overlayer d-lg-none ${isSidebarOpen || isSearchbarOpen ? 'open' : ''}`} onClick={(e) => { e.preventDefault(); closeSidebar(); closeSearchbar(); }} /> */}
            </div>
        </>
    );
};

export default TrackingLayout;
