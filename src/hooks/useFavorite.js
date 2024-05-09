
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import useLoginModal from "./useLoginModal";
import { useNavigate } from "react-router-dom";
import { addFav, deleteFav } from "../services/favourites";
import { useCookies } from "react-cookie";



const useFavorite = ({ listing, userFav }) => {
    const [cookies, setCookies] = useCookies(['access-token']);
    const navigate = useNavigate();
    const loginModal = useLoginModal();
    const [list, setList] = useState([]);

    useEffect(() => {
        if (userFav) { userFav.map((fav) => setList((prev) => [...prev, fav.id])) };
    }, [userFav, cookies])


    const hasFavorited = useMemo(() => {
        return list.includes(listing.id);
    }, [list, listing]);

    const toggleFavorite = useCallback(
        async (e) => {
            e.stopPropagation();

            // if (!userFav) {
            //     return loginModal.onOpen();
            // }
            console.log(hasFavorited);
            try {
                if (hasFavorited) {
                    await deleteFav(cookies, listing.id);
                    toast.success("Removed from favorites!");

                } else {
                    await addFav(cookies, listing.id);
                    toast.success("Saved to favorites!");
                }

                setInterval(() => { navigate(0) }, 450)


            } catch (error) {
                toast.error("Something went wrong.");
            }
        },
        [userFav, hasFavorited, listing, loginModal, navigate],
    );

    return {
        hasFavorited,
        toggleFavorite,
    };
};

export default useFavorite;