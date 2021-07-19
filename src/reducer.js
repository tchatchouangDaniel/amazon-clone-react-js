export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const idx = state.basket.findIndex((item) => item.id === action.item?.id);
      let finalBasket = [...state.basket];
      if (idx !== -1) {
        finalBasket[idx].qty++;
      } else {
        finalBasket = [...state.basket, action.item];
      }
      return {
        ...state,
        basket: [...finalBasket],
      };
    case "REMOVE_FROM_BASKET":
      const finalBasketRemove = state.basket.filter(
        (item) => item.id !== action.item.id
      );
      return {
        ...state,
        basket: [...finalBasketRemove],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "CHANGE_QTY":
      const i = state.basket.findIndex((item) => item.id === action.item?.id);
      let fBasket = [...state.basket];
      if (action.item.qty === 0) {
        fBasket.splice(i, 1);
      } else {
        fBasket[i].qty = action.item.qty;
      }

      return {
        ...state,
        basket: [...fBasket],
      };
    case "REMOVE_ALL":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_PRODUCT":
      const index = state.basket.findIndex(
        (item) => item.id === action.item?.id
      );
      let removedBasket = [...state.basket];
      removedBasket.splice(index, 1);
      return {
        ...state,
        basket: [...removedBasket],
      };
    default:
      return state;
  }
};

export default reducer;
