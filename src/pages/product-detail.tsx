import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { productsAtom } from "../atom";
import { ProductType } from "./product-list";
import {
  deepDarkGreen,
  darkGreen,
  deepBrown,
  lightDarkGreen,
} from "../styles/theme";

const ProductDetail = () => {
  const params = useParams();
  const products = useRecoilValue<ProductType[]>(productsAtom);
  const currentProduct = products.find(
    (product) => Number(product.id) === Number(params.id)
  );

  return (
    <StyledProductDetail>
      <Image src={currentProduct?.image} alt={currentProduct?.name} />
      <InfoContainer>
        <Quantity quantity={Number(currentProduct?.quantity)}>
          {Number(currentProduct?.quantity) ? "Ada Stok" : "Stok menipis"}
        </Quantity>
        <Name>{currentProduct?.name}</Name>
        <Price>Rp {currentProduct?.price?.toLocaleString()}</Price>
        <Button>Tambah Ke Keranjang</Button>
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
`;

const Image = styled.img`
  width: 400px;
  height: 600px;
  object-fit: contain;
  margin-right: 20px;
  background-color: #e0e0e0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 35vw;
  height: 600px;
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
  padding: 8px;
  margin-top: 25px;
  border: none;
  background-color: ${deepBrown};
  color: white;
  font-size: 24px;
  font-family: "Cabin", sans-serif;
  cursor: pointer;
`;

export default ProductDetail;
