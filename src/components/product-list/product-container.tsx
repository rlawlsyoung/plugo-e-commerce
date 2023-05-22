import styled from "styled-components";

import { darkGreen, deepDarkGreen, lightDarkGreen } from "../../styles/theme";

interface Props {
  color: string;
  image: string;
  name: string;
  price: number;
  quantity: string;
}

const ProductContainer: React.FC<Props> = ({
  color,
  image,
  name,
  price,
  quantity,
}) => {
  return (
    <StyledProductContainer>
      <ImgWrapper>
        <Img src={image} alt={name} />
        <Quantity quantity={quantity}>
          {quantity ? "Ada Stok" : "Stok menipis"}
        </Quantity>
      </ImgWrapper>
      <Name>{name}</Name>
      <Price>Rp {price.toLocaleString("en-US")}</Price>
    </StyledProductContainer>
  );
};

const StyledProductContainer = styled.div`
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
`;

interface QuantityProps {
  quantity: number;
}

const Quantity = styled.p<QuantityProps>`
  position: absolute;
  left: 7.5px;
  bottom: 7.5px;
  padding: 2px;
  background-color: ${(props) => (props.quantity ? deepDarkGreen : "white")};
  color: ${(props) => (props.quantity ? "white" : "black")};
  font-size: 12px;
`;

const Name = styled.p`
  color: ${darkGreen};
  padding: 30px 0 5px 0;
`;

const Price = styled.p`
  color: ${lightDarkGreen};
  padding: 0 0 60px 0;
`;

export default ProductContainer;
