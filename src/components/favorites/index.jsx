import { useEffect } from "react";
import Container from "../utils/container";
import Heading from "../utils/heading";
import ListingCard from "../listing/listingCard";
import { useCookies } from "react-cookie";
import { getFavListings } from "../../services/listing";


const Favorites = ({
favorites
}) => {



    return (
        <Container>
            <Heading
                title="Favorites"
                subTitle="List of places you have favorited!"
            />
            <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {favorites.map((fav) => (
                    <ListingCard key={fav.id} data={fav} favorites={favorites} />
                ))}
            </div>
        </Container>
    );
};

export default Favorites;