import React from "react";

import useLoginModal from "../../../hooks/useLoginModal";
import useRegisterModal from "../../../hooks/useRegisterModal";
// import { SafeUser } from "@/app/types";
// import { signOut } from "next-auth/react";

// import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../../utils/avatar";
import MenuItem from "./menuItem";

// interface UserMenuProps {
//   currentUser?: SafeUser | null;
// }

// const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
//   const router = useRouter();





// if (!currentUser) {
//   return loginModal.onOpen();
// }


function UserMenu() {

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);
    return (
        <>


            <div
                onClick={toggleOpen}
                className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                <AiOutlineMenu />
                <div className="hidden md:block">
                    <Avatar />
                </div>
            </div>


            {isOpen && (
                <>

                    <div className="absolute rounded-xl filter drop-shadow-xl w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                        <div className="flex flex-col cursor-pointer inset-0 z-50">
                            {false ? (
                                <>
                                    <MenuItem
                                        //   onClick={() => router.push("/trips")}
                                        label="My trips"
                                    />
                                    <MenuItem
                                        //   onClick={() => router.push("/favorites")}
                                        label="My favorites"
                                    />
                                    <MenuItem
                                        //   onClick={() => router.push("/reservations")}
                                        label="My reservations"
                                    />
                                    <MenuItem
                                        //   onClick={() => router.push("/properties")}
                                        label="My properties"
                                    />
                                    <MenuItem
                                        //   onClick={() => rentModal.onOpen}
                                        label="Airbnb my home"
                                    />
                                    <hr />
                                    <MenuItem
                                        // onClick={signOut}
                                        label="Logout" />
                                </>
                            ) : (
                                <>
                                    <MenuItem
                                        onClick={loginModal.onOpen}
                                        label="Login" />
                                    <MenuItem
                                        onClick={registerModal.onOpen}
                                        label="Sign up" />
                                </>
                            )}
                        </div>
                    </div>


                </>
            )}

            {isOpen && (<div
                className="fixed  inset-0 -z-10 "
                onClick={toggleOpen}
            ></div>)}




        </>

    );
};

export default UserMenu;
