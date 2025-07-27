import Navbar from "./../components/navbar.jsx";
import { useEffect, useState } from "react";
import ValueCards from "./../components/valuecards.jsx";
import Product from "./product.jsx";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products"));
    setProducts(stored || []);
  }, []);

  const totalItems = products.length;
  const totalPrice = products.reduce(
    (acc, product) => acc + (Number(product.price) || 0.00),
    0
  );

  return (
    <div className="container">
      <Navbar />
      <div className="valuecards-container">
        <ValueCards title="Total Items" value={totalItems} />
        <ValueCards title="Total Price" value={`₹${totalPrice}`} />
        <ValueCards title="Total Items" value={3} />
        {/* price rendering remain */}
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
};
export default Home;
