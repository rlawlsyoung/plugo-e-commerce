import styled from "styled-components";

interface Props {
  name: string;
  image: string;
  price: number;
}

const ItemContainer: React.FC<Props> = ({ name, image, price }) => {
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

export default ItemContainer;
