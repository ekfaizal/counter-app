import { Button } from "react-bootstrap";
import React, { useState } from "react";
const products = [
  { id: 1, name: "Laptop", brand: "Dell", qty: 1 },
  { id: 2, name: "Laptop", brand: "HP", qty: 1 },
  { id: 3, name: "Laptop", brand: "ASUS", qty: 1 },
  { id: 4, name: "Laptop", brand: "MSI", qty: 1 },
  { id: 5, name: "Laptop", brand: "THOSHIBA", qty: 1 },
];
const Keys = () => {
  const [items, setItem] = useState(products);
  
  const changeQty = (id) => {
    const newitem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItem(newitem);
  };
  return (
    <div>
      {items.map((product) => (
        <div className="bg-warning mt-2 text-center" key={product.id}>
          <h1>{product.name}</h1>
          <h3>{product.brand}</h3>
          <h4>Qty : {product.qty}</h4>
          <Button onClick={() => changeQty(product.id)}>+</Button>
        </div>
      ))}
    </div>
  );
};

export default Keys;
