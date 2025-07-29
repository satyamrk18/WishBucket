import { useEffect, useState } from "react";
import ValueCards from "./../components/valuecards.jsx";
import Product from "./product.jsx";
import Navbar from "./../components/navbar.jsx";
import "./Home.css";
import EmptyProduct from "./emptyproduct.jsx";
import Footer from "./../components/footer.jsx";


const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products"));
    setProducts(stored || []);
  }, []);

  const totalItems = products.length;
  const totalPrice = products.reduce(
    (acc, product) => acc + (Number(product.price) || 0.0),
    0
  );

  return (
    <div className="container">
      <Navbar />
      <div className="valuecards-container">
        <ValueCards title="Total Items" value={totalItems} />
        <ValueCards
          title="Total Price"
          value={`₹${totalPrice}`}
          color="green"
        />
        <ValueCards
          title="Total Priority"
          value={`${products.length === 0 ? 0 : 3}`}
        />
      </div>
      <div>
        {products.length > 0 ? (
          <div className="search-and-card-container">
            <div className="main-card"><Product /></div>
          </div>
        ) : (
          <div>
            <EmptyProduct />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
