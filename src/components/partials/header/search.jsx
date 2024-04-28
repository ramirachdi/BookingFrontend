import React from "react";
import { BiSearch } from "react-icons/bi";

function Search() {
    const locationLabel = "Anywhere";
    const guestLabel = "Add Guests";
    const durationLabel = "Anytime";

    return (<>
        <div
            // onClick={searchModal.onOpen}
            className="border-[1px] border-grey w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="px-6 text-sm font-semibold">{locationLabel}</div>
                <div className="hidden sm:block text-sm font-semibold px-6 border-x-[2px] border-gray-200 flex-1 text-center">
                    {durationLabel}
                </div>
                <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
                    <div className="hidden sm:block">{guestLabel}</div>
                    <div className="p-2 rounded-full bg-violet">
                        <BiSearch size={18} color="white" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Search;