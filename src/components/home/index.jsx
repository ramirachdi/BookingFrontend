import React from "react";
import Container from "../utils/container";

import ListingCard from "../listing/listingCard"




function Home() {
    let listings = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ];
    return (
        
        <Container>
            <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
                {listings.map((item) => (
                    <div >
                        <ListingCard />
                    </div>
                ))}
            </div>
        </Container>
        
    );
};

export default Home;