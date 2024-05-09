import React from "react";
import HeartButton from "../utils/heartButton";
import { useCountries } from "../../hooks/useCountries";
import { useCallback, useEffect } from "react";
import Button from "../utils/button";

function ListingCard({
    data,
    reservation,
    onAction,
    actionLabel,
    actionId = "",
    disabled,
    favorites
}) {

    const { getByValue } = useCountries();
    const location = getByValue(data.country);

    const handleCancel = useCallback(
        (e) => {
            e.stopPropagation();

            if (disabled) {
                return;
            }

            onAction?.(actionId);
        },
        [onAction, actionId, disabled],
    );


    return (<>
        <div
            className="col-span-1 cursor-pointer group">
            <div className="flex flex-col w-full">
                <div className="relative w-full overflow-hidden aspect-square rounded-xl mb-1.5">
                    <img
                        src={data.image_url}
                        alt="Listing"
                        className="object-cover w-full h-full transition group-hover:scale-110"
                    />

                    <div className="absolute top-3 right-3">
                        <HeartButton listing={data} userFav={favorites} />
                    </div>
                </div>
                <div className="text-lg font-semibold">
                    {location?.region}, {location?.label}

                </div>
                <div className="font-light text-neutral-500">
                    {/* {reservationDate || data.category} */}
                    {data.type}
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div className="font-semibold">
                        {data.price}$
                    </div>
                    {true && <div className="font-normal"> per night</div>}
                </div>

                {onAction && actionLabel && (
                    <Button
                        disabled={disabled}
                        small
                        label={actionLabel}
                        onClick={handleCancel}
                    />
                )}
            </div>
        </div>
    </>)
}

export default ListingCard;