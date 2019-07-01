import React from "react"
import background_img from "./img/Prague.jpg"

const Hello = () => {
    return (
        <div className="bg-scroll">
            <img className="background_img" src={background_img} />
        </div>
    )
}

export default Hello