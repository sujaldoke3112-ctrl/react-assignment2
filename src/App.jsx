import { useState } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Quantity Selector</h2>

      <input
        type="text"
        placeholder="Enter Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={decreaseQty}>-</button>
      <span style={{ margin: "0 15px" }}>{quantity}</span>
      <button onClick={increaseQty}>+</button>

      <h3>Product: {productName}</h3>
      <h3>Price: ₹{price}</h3>
      <h3>Quantity: {quantity}</h3>
      <h3>Total Amount: ₹{price * quantity}</h3>
    </div>
  );
}

export default App;