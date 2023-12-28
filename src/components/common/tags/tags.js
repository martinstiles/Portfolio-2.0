import React from 'react'
import "./tags.style.scss"

const Tags = ({tags, animation = "", useRandomColors = false}) => {
    if (!tags) return null

    const colors = ["#bdeaee", "#a8e6cf", "#dcedc1", "#f4e7e7", "#e4dcf1", "#ffd3b6", "#ffaaa5" ,"#ff8b94"]
    let i = Math.floor(Math.random() * colors.length)
    const getNextColor = () => {
        const nextColor = colors[i]
        i = (i + 1) % colors.length
        return nextColor
    }

    let key = 0

    return (
        <div className={`tag-container animate__animated ${animation}`}>
            {
                tags.map(tag => {
                    return useRandomColors
                    ?
                    <h3 style={{backgroundColor: getNextColor()}} className="tag" key={key++}> {tag} </h3>
                    :
                    <h3 className="tag" key={key++}> {tag} </h3>

                })
            }
        </div>
    )
}

export default Tags
