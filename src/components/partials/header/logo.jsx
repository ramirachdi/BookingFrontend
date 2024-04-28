import React from "react";
import { Link } from "react-router-dom";


const Logo = () => {

    return (
        <Link to="/home">
            <img
                alt="logo"
                className="hidden cursor-pointer md:block"
                height={100}
                width={100}
                src="/assets/images/logo.svg"
            />

        </Link>

    );
};

export default Logo;