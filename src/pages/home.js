import { useCookies } from "react-cookie";
import { getFavListings } from "../services/favourites";
import { React, useEffect, useState } from "react";
import Layout from "../components/partials/layout/index";
import Home from "../components/home";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function HomePage() {
    const [filters, setFilters] = useState();

    const [cookies, setCookies] = useCookies(['access-token']);
    const [favlistings, setFavListings] = useState([]);
    useEffect(() => {
        getFavListings(cookies, setFavListings);
    }, [cookies])
    return (
        <>
            <Toaster />
            <Layout searchBar={true} action={setFilters}>
                <Home filters={filters} favorites={favlistings} />
            </Layout>
        </>

    )
}

export default HomePage;