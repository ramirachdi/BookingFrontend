import { React, useState } from "react";
import Layout from "../components/partials/layout/index";
import Home from "../components/home";

function HomePage() {
    const [filters, setFilters] = useState();

    return (
        <>
            <Layout action={setFilters}>
                <Home filters={filters} />
            </Layout>
        </>

    )
}

export default HomePage;