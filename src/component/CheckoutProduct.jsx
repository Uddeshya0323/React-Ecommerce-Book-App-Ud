import React from "react";
import StarIcon from '@mui/icons-material/Star';
import Button from "@mui/material/Button";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ Id, Title, Image, Price, Rating }) => {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            Id: Id,
        })
    }
  return (
    <>
    {/* <div className="w-full h-full grid place-items-center">
      <div id="checkout_image" className="w-48">
        <img src={Image} />
        </div>
        <div id="checkout_product_detail" className="w-full px-10">
        <p>{Title}</p>
        <p>{Price}</p>

        <div id="checkoutProduct__rating" className="flex w-full py-3">
          {Array(Rating)
            .fill()
            .map((_, i) => (
              <p>
                <RiStarLine />
              </p>
            ))}
        </div>

        <Button className="py-3" variant="outlined">
          Remove From Basket
        </Button>
      
     
      </div>
      </div> */}

      <div id="main-checkout-product" className="flex justify-between  w-full  rounded-lg bg-white py-10 mb-10">
        <div id="product-imf" className="basis-auto w-32 px-4">
        <img src={Image} />
        </div>
        <div id="title-price-rating-button" className="basis-3/4">
            <div id="title">{Title}</div>
            <div id="price">{Price}</div>
            <div id="rating" className="flex py-3">
            {Array(Rating)
            .fill()
            .map((_, i) => ( 
              <p>
                <StarIcon />
              </p>
            ))}
            </div>
            <div id="btn" className="">
            <Button className="py-3" variant="outlined" onClick={removeFromBasket}>
          Remove From Basket
        </Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
