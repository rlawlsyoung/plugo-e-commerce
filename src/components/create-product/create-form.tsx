import { useCallback, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import styled from "styled-components";

import { productsAtom } from "../../atom";
import { darkGreen } from "../../styles/theme";

const CreateForm = () => {
  const [products, setProducts] = useRecoilState(productsAtom);
  const imageRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios({
      url: "/public/mock-data.json",
      method: "get",
    }).then((res) => {
      setProducts(res.data.products);
    });
  }, [setProducts]);

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(products);
      const lastId = products[products.length - 1].id;
      const newProduct = {
        id: lastId + 1,
        category: ["Semua Produk", "Produk Unggulan", "Produk Baru"],
        color: colorRef.current?.value,
        image: imageRef.current?.value,
        name: nameRef.current?.value,
        price: priceRef.current?.value,
        quantity: quantityRef.current?.value,
      };

      setProducts([...products, newProduct]);
    },
    [products, setProducts]
  );

  return (
    <StyledCreateForm onSubmit={submitHandler}>
      <InputWrapper>
        <InputTitle>Image</InputTitle>
        <Input
          placeholder="fill in the url"
          autoComplete="off"
          ref={imageRef}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Name</InputTitle>
        <Input
          placeholder="fill in 2 ~ 16 characters"
          autoComplete="off"
          ref={nameRef}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Color</InputTitle>
        <Input
          placeholder="fill in 2 ~ 16 characters"
          autoComplete="off"
          ref={colorRef}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Price</InputTitle>
        <Input
          placeholder="fill in the numbers"
          autoComplete="off"
          ref={priceRef}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Quantity</InputTitle>
        <Input
          placeholder="fill in the numbers"
          autoComplete="off"
          ref={quantityRef}
        />
      </InputWrapper>
      <InputWrapper>
        <InputTitle>Category</InputTitle>
        <Input
          placeholder="Separate by comma(,) ex) Produk Unggulan,Produk Bundle"
          autoComplete="off"
          ref={categoryRef}
        />
      </InputWrapper>
      <Button>SUBMIT</Button>
    </StyledCreateForm>
  );
};

const StyledCreateForm = styled.form`
  width: 60vw;
  color: ${darkGreen};
`;

const InputTitle = styled.p`
  width: 80px;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
`;

const InputWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.input`
  height: 30px;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-family: "Cabin", sans-serif;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 25px;
  border: none;
  background-color: ${darkGreen};
  color: white;
  font-size: 24px;
  font-family: "Cabin", sans-serif;
  cursor: pointer;
`;

export default CreateForm;
