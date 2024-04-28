import React from "react";
import HeartButton from "../utils/heartButton";
import Button from "../utils/button";

function ListingCard({ }) {

    return (<>
        <div
            className="col-span-1 cursor-pointer group">
            <div className="flex flex-col w-full gap-2">
                <div className="relative w-full overflow-hidden aspect-square rounded-xl">
                    <img
                        fill
                        src="/assets/images/images.jpg"
                        alt="Listing"
                        className="object-cover w-full h-full transition group-hover:scale-110"
                    />

                    <div className="absolute top-3 right-3">
                        <HeartButton />
                    </div>
                </div>
                <div className="text-lg font-semibold">
                    {/* {location?.region}, {location?.label} */}
                    bla bla
                </div>
                <div className="font-light text-neutral-500">
                    {/* {reservationDate || data.category} */}
                    bla bla
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        $ price
                    </div>
                    {/* {!reservation && <div className="font-semibold">/ Night</div>} */}
                </div>

            </div>
        </div>
    </>)
}

export default ListingCard;