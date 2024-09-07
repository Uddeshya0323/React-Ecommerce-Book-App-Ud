import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div id="navbar-main " className=" w-full z-30 fixed">
        <Navbar />
      </div>
      <div
        id="main_container"
        className="flex justify-between p-24 bg-orange-100  w-screen"
      >
        <div id="checkout_left_side" className=" flex w-3/5 ">
          <div id="checkout_basket">
            <h1 className="text-3xl pb-5">Your Shopping Cart Basket</h1>
            <div className="grid justify-around ">
              {basket.map((item) => (
                <CheckoutProduct
                  Id={item.Id}
                  Title={item.Title}
                  Image={item.Image}
                  Price={item.Price}
                  Rating={item.Rating}
                />
              ))}
            </div>
          </div>
        </div>

        <div id="checkout_right-side" className="pt-14">
          <h1>
            <Subtotal />
          </h1>
        </div>
      </div>

      <div id="footer" className="">
        <hr className="my-8 border-blue-gray-50" />
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
