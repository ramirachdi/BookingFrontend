import { React, useCallback } from "react";
import useRentModal from "../../../hooks/useRentModal";


function RentButton() {
    const rentModal = useRentModal();
    const onRent = useCallback(() => {
        rentModal.onOpen();
    }, [rentModal]);

    return (
        <div
            onClick={onRent}
            className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-qgray">
            Airbnb your home
        </div>
    )
}

export default RentButton;