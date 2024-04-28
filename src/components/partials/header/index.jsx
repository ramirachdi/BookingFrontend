import React from "react";
import Search from "./search";
import Logo from "./logo";
import UserMenu from "./userMenu";
import Container from "../../utils/container";

function Header() {


    return (<>

        <div className="fixed z-10 w-full bg-white shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu />
                    </div>
                </Container>
            </div>
            {/* <Categories /> */}
        </div>





    </>)
}
export default Header;