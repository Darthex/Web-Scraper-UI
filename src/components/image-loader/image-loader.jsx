import React, {useState} from "react";
import LoadingCentered from "../loading-centered/loading-centered.jsx";
import "./image-loader.css"

export default function ImageLoader({ src, alt, height, width }) {

    const [isLoaded, setIsLoaded] = useState(false)

    function handleOnLoad() {
        setIsLoaded(true)
    }

    return (
        <div style={{height: height, width: width}} className="image-container">
            {!isLoaded && <LoadingCentered size='small'/>}
            <img
                src={src}
                alt={alt}
                className={isLoaded ? 'loaded' : 'loading'}
                onLoad={handleOnLoad}
            />
        </div>
    )
}
