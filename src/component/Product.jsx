import React from "react";
import Button from "@mui/material/Button";
import StarIcon from '@mui/icons-material/Star';
import book from "../assets/book.png";
import logo from "../assets/book.png";
import bg from "../assets/book.png";
import { useStateValue } from "./StateProvider";

const Product = ({ Id, Title, Image, Price, Rating }) => {

  const [{basket}, dispatch] = useStateValue();
  console.log("this is my basket -->")

  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        Id: Id,
        Title: Title,
        Image: Image,
        Price: Price,
        Rating: Rating,
      },
    });
  };
  return (
    <>
      <div id="product-info" className="grid justify-around h-fit ">
        <div id="title">
          {" "}
          <p className=" flex justify-around text-justify text-slate-700 font-semibold">
            {Title}
          </p>
          <div id="cover" className="grid place-content-center ">
            {/* {data.map((d) => (   */}
            <div className="w-32 pt-10 h-64">
              <img className="h-44" src={Image} alt="" /> 
            </div>
            {/* ))} */}
            <div className="grid place-content-center" id="rating-price">
              <p className="px-10">{Price}</p>
              <div id="rating" className="flex justify-around py-3">
                {Array(Rating)
                  .fill()
                  .map((_, i) => (
                    <p>
                      <StarIcon />
                    </p>
                  ))}
              </div>
            </div>
            <Button className="py-3" variant="outlined" onClick={addToBasket}>
              Add To Basket
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
