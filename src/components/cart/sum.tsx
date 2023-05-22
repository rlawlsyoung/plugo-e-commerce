import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { cartAtom } from "../../atom";
import { CartProductType } from "../../pages/product-detail";
import { darkGreen, lightDarkGreen } from "../../styles/theme";

const Sum = () => {
  const cart = useRecoilValue<CartProductType[]>(cartAtom);

  const totalPrice = useCallback(() => {
    let total = 0;
    cart.map(
      (product) =>
        (total += Number(product.price) * Number(product.cartQuantity))
    );
    return total;
  }, [cart]);

  return (
    <StyledSum>
      <Text>Total Harga Produk</Text>
      <Price>Rp {totalPrice().toLocaleString()}</Price>
    </StyledSum>
  );
};

const StyledSum = styled.div`
  background-color: white;
  width: 20vw;
  height: 200px;
  padding: 20px;
  margin-left: 20px;
`;

const Text = styled.p`
  margin-bottom: 5px;
  color: ${darkGreen};
  font-size: 18px;
  font-weight: 500;
`;

const Price = styled.p`
  margin-top: 20px;
  color: ${lightDarkGreen};
  font-size: 15px;
`;

export default Sum;
