import { useEffect, useState } from "react";
import ValueCards from "./../components/valuecards.jsx";
import Product from "./product.jsx";
import Navbar from "./../components/navbar.jsx";
import EmptyProduct from "./emptyproduct.jsx";
import Heading from "./../components/heading.jsx";
import Footer from "./../components/footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products"));
    setProducts(stored || []);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const totalItems = products.length;
  const totalPrice = products.reduce(
    (acc, product) => acc + (Number(product.price) || 0.0),
    0
  );

  return (
    <div className="h-screen pt-12 box-border">
      <Navbar />
      <div className="w-full text-center mt-15"><Heading /></div>
      <div className="w-11/12 mx-auto my-12 flex items-center justify-evenly" data-aos="flip-up">
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
          <Product/>
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
