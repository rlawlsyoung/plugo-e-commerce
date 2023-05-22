import { useRecoilState } from "recoil";
import styled from "styled-components";

import Product from "../components/cart/product";
import { cartAtom } from "../atom";
import { CartProductType } from "./product-detail";

const Cart = () => {
  const [cart, setCart] = useRecoilState<CartProductType[]>(cartAtom);
  return (
    <StyledCart>
      {cart.map((product) => (
        <Product
          name={product.name}
          image={product.image}
          price={product.price}
          cartQuantity={product.cartQuantity}
        />
      ))}
    </StyledCart>
  );
};

const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 112px;
  margin-bottom: 60px;
`;

export default Cart;
