import React from "react";
import CurrencyFormat from "react-currency-format";
import Button from "@mui/material/Button";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

const Subtotal = () => {

  const [{basket} , dispatch] = useStateValue();
 

  return (
    <>
      <div className="bg-white rounded-xl w-80 h-96 p-8 ">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
              
            </p>
            <input type="checkbox" /> This order contains a gift
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <div className="flex p-5">
      <Button className="py-3 " variant="outlined">
        Proceed To Checkout
      </Button>
      </div>
      </div>
      
    </>
  );
};


export default Subtotal;
