import { React, useState, useEffect } from "react";
import Container from "../utils/container";
import { getListings } from "../../services/listing";
import ListingCard from "../listing/listingCard";





function Home() {
    const [listings, setListings] = useState([])
    useEffect(() => {
        getListings(setListings);
    }, [])

    console.log(listings);

    return (

        <Container>
            <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
            {listings.map((item) => (
            <div key={item.id}>
              <ListingCard data={item}  />
            </div>
          ))}
            </div>
        </Container>

    );
};

export default Home;