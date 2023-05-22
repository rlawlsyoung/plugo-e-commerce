import { useCallback } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { productsAtom, cartAtom } from "../atom";
import { ProductType } from "./product-list";
import {
  deepDarkGreen,
  darkGreen,
  deepBrown,
  lightDarkGreen,
  responsive,
} from "../styles/theme";

export interface CartProductType {
  id: string | undefined;
  category: string[] | undefined;
  color: string | undefined;
  image: string | undefined;
  name: string | undefined;
  price: string | undefined;
  quantity: string | undefined;
  cartQuantity: number;
}

const ProductDetail = () => {
  const params = useParams();
  const products = useRecoilValue<ProductType[]>(productsAtom);
  const [cart, setCart] = useRecoilState<CartProductType[]>(cartAtom);
  const currentProduct = products.find(
    (product) => Number(product.id) === Number(params.id)
  );

  const cartHandler = useCallback(() => {
    const existingProduct = cart.filter(
      (product) => product.id === currentProduct?.id
    )[0];

    if (existingProduct) {
      const newCart = cart.map((product) =>
        product.id === existingProduct.id
          ? { ...product, cartQuantity: existingProduct.cartQuantity + 1 }
          : product
      );
      setCart(newCart);
    } else {
      const currentCartProduct = {
        id: currentProduct?.id,
        category: currentProduct?.category,
        color: currentProduct?.color,
        image: currentProduct?.image,
        name: currentProduct?.name,
        price: currentProduct?.price,
        quantity: currentProduct?.quantity,
        cartQuantity: 1,
      };

      setCart([currentCartProduct, ...cart]);
    }
    alert("Successfully placed in cart!");
  }, [currentProduct, cart, setCart]);

  return (
    <StyledProductDetail>
      <Image src={currentProduct?.image} alt={currentProduct?.name} />
      <InfoContainer>
        <Quantity quantity={Number(currentProduct?.quantity)}>
          {Number(currentProduct?.quantity) ? "Ada Stok" : "Stok menipis"}
        </Quantity>
        <Name>{currentProduct?.name}</Name>
        <Price>Rp {currentProduct?.price?.toLocaleString()}</Price>
        <Button onClick={cartHandler}>Tambah Ke Keranjang</Button>
      </InfoContainer>
    </StyledProductDetail>
  );
};

const StyledProductDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 112px;
  margin-bottom: 60px;

  @media ${responsive.tablet} {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 600px;
  object-fit: contain;
  margin-right: 20px;
  background-color: #e0e0e0;

  @media ${responsive.tablet} {
    width: 100vw;
    margin-bottom: 50px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35vw;
  height: 600px;

  @media ${responsive.tablet} {
    width: 100vw;
    padding: 0 15px;
    height: auto;
  }
`;

const Quantity = styled.p<{ quantity: number }>`
  padding: 2.5px;
  background-color: ${(props) => (props.quantity ? deepDarkGreen : "white")};
  color: ${(props) => (props.quantity ? "white" : "black")};
  font-size: 14px;
`;

const Name = styled.p`
  padding: 15px 0 15px 0;
  font-size: 22px;
  font-weight: 500;
  color: ${darkGreen};
`;

const Price = styled.p`
  padding: 0 0 60px 0;
  color: ${lightDarkGreen};
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 25px;
  border: none;
  border-radius: 5px;
  background-color: ${deepBrown};
  color: white;
  font-size: 16px;
  font-family: "Cabin", sans-serif;
  cursor: pointer;
`;

export default ProductDetail;
