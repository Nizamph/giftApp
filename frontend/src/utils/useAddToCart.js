import { useDispatch, useSelector } from 'react-redux';
import addCartItems from './AddCartItems';

function useAddToCart() {
  const dispatch = useDispatch();
  const userToken = useSelector((store) => store.auth.userToken);
  const cartItems = useSelector((store) => store.cart.cartItems);

  return async (product) => {
    await addCartItems(dispatch, userToken, cartItems, product);
  };
}

export default useAddToCart;
