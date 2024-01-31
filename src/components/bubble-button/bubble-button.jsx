import React from "react";
import "./bubble-button.css"

export default function BubbleButton({ content, url }) {

    return (
        <a href={url} target="_blank">
            <div className="bubble-button grid-item">
                {content}
            </div>
        </a>
    )
}