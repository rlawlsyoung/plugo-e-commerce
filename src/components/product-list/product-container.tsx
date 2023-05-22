import styled from "styled-components";

import {
  darkGreen,
  deepDarkGreen,
  lightDarkGreen,
  responsive,
} from "../../styles/theme";

interface Props {
  color: string;
  image: string;
  name: string;
  price: string;
  quantity: string;
}

const ProductContainer: React.FC<Props> = ({
  image,
  name,
  price,
  quantity,
}) => {
  return (
    <StyledProductContainer>
      <ImgWrapper>
        <Img src={image} alt={name} />
        <Quantity quantity={Number(quantity)}>
          {Number(quantity) ? "Ada Stok" : "Stok menipis"}
        </Quantity>
      </ImgWrapper>
      <Name>{name}</Name>
      <Price>Rp {price?.toLocaleString()}</Price>
    </StyledProductContainer>
  );
};

const StyledProductContainer = styled.div`
  margin: 12px;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 16vw;
  height: 16vw;
  object-fit: cover;

  @media ${responsive.tablet} {
    width: 20vw;
    height: 20vw;
  }

  @media ${responsive.mobile} {
    width: 40vw;
    height: 40vw;
  }
`;

const Quantity = styled.p<{ quantity: number }>`
  position: absolute;
  left: 7.5px;
  bottom: 7.5px;
  padding: 2px;
  background-color: ${(props) => (props.quantity ? deepDarkGreen : "white")};
  color: ${(props) => (props.quantity ? "white" : "black")};
  font-size: 12px;
`;

const Name = styled.p`
  padding: 30px 0 5px 0;
  font-weight: 500;
  color: ${darkGreen};
`;

const Price = styled.p`
  padding: 0 0 60px 0;
  color: ${lightDarkGreen};
`;

export default ProductContainer;
