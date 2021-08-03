import React from 'react'
import "./tags.style.scss"

const Tags = ({tags, noAnimation = false}) => {
    if (!tags) return null

    const onMountAnimation = noAnimation ?
        "animate__fadeIn"
        :
        window.innerWidth <= 900 ? "animate__fadeInRight" : "animate__fadeInUp"


    return (
        <div className={`tag-container animate__animated ${onMountAnimation}`}>
        {
            tags.map(tag =>
                <h3 className="tag"> #{tag} </h3>
            )
        }
        </div>
    )
}

export default Tags
