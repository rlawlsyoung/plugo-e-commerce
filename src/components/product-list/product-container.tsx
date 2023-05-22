import styled from "styled-components";

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
      <Img src={image} alt={name} />
      <Name>{name}</Name>
      <Price>Rp {price}</Price>
    </>
  );
};

const Img = styled.img``;

const Name = styled.p``;

const Price = styled.p``;

export default ProductContainer;
