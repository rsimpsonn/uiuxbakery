import React from "react";

export default function BakeryItem({item, index, addToCart }) {
	return (
		<div style={{display: "flex", flexDirection: "column", maxWidth: 300}}>
      <img src={item.image} style={{width: "100%", height: "auto"}}/>
      <p>{item.name}</p>
      <button onClick={() => addToCart(index)}>Add To Cart</button>
      </div>
	)
}