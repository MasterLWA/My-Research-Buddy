import Routes from "../../Router/RouterApp";
import Header from "../Navbar/Navibar";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
        <Header />

            <Routes />

        <Footer />
        </>
    );
    }

export default Layout;