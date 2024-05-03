import { React, useEffect, useRef } from "react";
import { Image } from "cloudinary-react";
import { TbPhotoPlus } from "react-icons/tb";


function ImageUpload({ value }) {
   

    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dqhtfmhmc',
            uploadPreset: 'uw_test'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
            }
        }
        );

    }, [])


    return (
        <div
            onClick={() => widgetRef.current.open()}
            className="relative flex flex-col items-center justify-center gap-4 p-20 transition border-2 border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-600">
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold">Click to Upload</div>
            {value && (
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        alt="upload"
                        fill
                        style={{ objectFit: "cover" }}
                        src={value}
                    />
                </div>
            )}

        </div>
    );
};

export default ImageUpload;
