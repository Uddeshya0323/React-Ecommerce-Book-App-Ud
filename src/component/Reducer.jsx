export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.Price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.Id === action.Id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (Id: ${action.Id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
    
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }

      default:
        return state;
  }

  
};


export default reducer;
