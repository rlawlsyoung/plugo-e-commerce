import styled from "styled-components";

import CreateForm from "../components/create-product/create-form";

const CreateProduct = () => {
  return (
    <StyledCreateProduct>
      <Title>Create Product (Admin Page)</Title>
      <CreateForm />
    </StyledCreateProduct>
  );
};

const StyledCreateProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 112px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export default CreateProduct;
