import { React } from "react";
import Header from "../header";
import Footer from "../footer";
import SearchModal from "../../modals/searchModal";
import RentModal from "../../rent_modal/rentModal";

function Layout({ children }) {
   

    return (<>
        <Header />
        <SearchModal />
        <RentModal />

        {children}
        <Footer />

    </>)
}

export default Layout;