import { useRecoilState } from "recoil";
import styled from "styled-components";

import Product from "../components/cart/product";
import Sum from "../components/cart/sum";
import { cartAtom } from "../atom";
import { CartProductType } from "./product-detail";

const Cart = () => {
  const [cart, setCart] = useRecoilState<CartProductType[]>(cartAtom);
  return (
    <StyledCart>
      <ProductsWrapper>
        {cart.map((product) => (
          <Product
            name={product.name}
            image={product.image}
            price={product.price}
            cartQuantity={product.cartQuantity}
          />
        ))}
      </ProductsWrapper>
      <Sum />
    </StyledCart>
  );
};

const StyledCart = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 112px;
  margin-bottom: 60px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Cart;
