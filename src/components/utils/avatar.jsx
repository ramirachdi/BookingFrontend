import React from "react";


function Avatar({src,width,height}) {
    return (<>
        <img
            className="rounded-full"
            width={width}
            height={height}
            src={src}
            alt="avatar"
        />

    </>)
}

export default Avatar;