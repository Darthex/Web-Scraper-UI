import React, {useEffect, useState} from "react";
import "./loading-centered.css"

export default function LoadingCentered({size}) {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 600)
        return function cleanup() {
            clearTimeout(timer)
        }
    });
    return (
        <div className={`container ${visible ? 'visible' : ''} ${size}`}>
            <div className={`spinner`}/>
        </div>
    )
}

LoadingCentered.defaultProps = {
    size: 'medium'
}
