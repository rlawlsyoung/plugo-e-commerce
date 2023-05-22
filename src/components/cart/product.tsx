import styled from "styled-components";

import { darkGreen, lightDarkGreen } from "../../styles/theme";

interface Props {
  name: string | undefined;
  image: string | undefined;
  price: string | undefined;
  cartQuantity: number;
}

const Product: React.FC<Props> = ({ name, image, price, cartQuantity }) => {
  return (
    <StyledProduct>
      <Image src={image} alt={name} />
      <Wrapper>
        <Name>{name}</Name>
        <Price>Rp {price?.toLocaleString()}</Price>
        <Quantity>Kuantitas : {cartQuantity}</Quantity>
      </Wrapper>
    </StyledProduct>
  );
};

const StyledProduct = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 40vw;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 3.5px;
  background-color: white;
`;

const Image = styled.img`
  width: 75px;
  height: 75px;
  margin-right: 15px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  margin-bottom: 5px;
  color: ${darkGreen};
  font-size: 18px;
  font-weight: 500;
`;

const Price = styled.p`
  color: ${lightDarkGreen};
  font-size: 15px;
`;

const Quantity = styled.p`
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

export default Product;
