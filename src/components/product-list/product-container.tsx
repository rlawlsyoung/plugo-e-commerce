import styled from "styled-components";

import { darkGreen } from "../../styles/theme";

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
    <>
      <ImgWrapper>
        <Img src={image} alt={name} />
        <Quantity>{quantity ? "Ada Stok" : "Stok menipis"}</Quantity>
      </ImgWrapper>
      <Name>{name}</Name>
      <Price>Rp {price}</Price>
    </>
  );
};

const ImgWrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
`;

const Quantity = styled.p`
  position: absolute;
  left: 7.5px;
  bottom: 7.5px;
  padding: 2px;
  background-color: ${darkGreen};
  color: white;
  font-size: 12px;
`;

const Name = styled.p``;

const Price = styled.p``;

export default ProductContainer;
