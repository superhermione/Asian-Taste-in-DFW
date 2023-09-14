import React from "react";

const Card = ({name, description, image, menu}) => {
    return(
        <div className ="card">
            <div className="card-img">
                <img src ={image} alt={name}/>
            </div>
            <div className="card-content">
                <h2 className="card-name">{name}</h2>
                <p className="card-description">{description}</p>
            </div>
            <a href = {menu}>
                <button className="menu-link">View Menu</button>
            </a>
            
        </div>
    );
};

export default Card;