import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [myCart, updateMyCart] = useState({});

  const addToCart = (i) => {

    const updatedCart = Object.assign({}, myCart)

    if (updatedCart[i]) {
      updatedCart[i] = updatedCart[i] + 1
    } else {
      updatedCart[i] = 1
    }

    console.log(updatedCart)

    updateMyCart(updatedCart)
  }

  const getPrice = () => {
    let totalPrice = 0

    Object.entries(myCart).forEach(([key, value]) => {
      totalPrice += value * bakeryData[key].price
    })

    return totalPrice
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div style={{display: "flex", flexDirection: "row"}}>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", width: "60%"}}>
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
      <div style={{display: "flex", flexDirection: "column", maxWidth: 300}}>
      <img src={item.image} style={{width: "100%", height: "auto"}}/>
      <p>{item.name}</p>
      <button onClick={() => addToCart(index)}>Add To Cart</button>
      </div>
      ))}
      </div>

      <div style={{width: "30%"}}>
      <h1>My Cart</h1>

            <div>
        {
          Object.entries(myCart).map(([key, value]) => {
            console.log(key)
            console.log(value)
            console.log(bakeryData[key])
            console.log(bakeryData[key].name)
            return <p>{value}x {bakeryData[key].name}</p>
          }
          )
        }
      </div>

      <p>Total: ${getPrice()}</p>

      </div>
      </div>
    </div>
  );
}

export default App;
