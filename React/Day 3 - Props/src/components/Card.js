import React from "react";
import Details from "./Details";
import ProductImage from "./ProductImage";
import "./card.css";

function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <ProductImage image={props.data.imageUrl}/>
            <Details data={props}/>
        </div>
    )
}

export default Card;