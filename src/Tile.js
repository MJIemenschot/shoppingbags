import React from 'react';


function Tile({image, title, info}){
    return (
        <section>
            <img src={image} alt={title}></img>
            <h2>{title}</h2>
            <p>{info}</p>
        </section>
    )
}
export default Tile;