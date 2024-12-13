
import PerfectToySection from "../Shared/AllSections/PerfectToySection/PerfectToySection";
import RecentPhotoShop from "../Shared/AllSections/RecentPhotoShop/RecentPhotoShop";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";



const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="space-y-10">
                <PerfectToySection />
                <RecentPhotoShop />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;