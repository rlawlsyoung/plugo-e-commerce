import { useEffect, useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import styled from "styled-components";

import ProductContainer from "../components/product-list/product-container";
import ProductsFilter from "../components/product-list/products-filter";
import { productsAtom } from "../atom";

export interface ProductType {
  id: string;
  category: string[];
  color: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const ProductList = () => {
  const [products, setProducts] = useRecoilState<ProductType[]>(productsAtom);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [filter, setFilter] = useState("Semua Produk");

  const onClickHandler = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) setFilter(e.target.id);
  }, []);

  useEffect(() => {
    axios({
      url: "/public/mock-data.json",
      method: "get",
    }).then((res) => {
      setProducts(res.data.products);
      setFilteredProducts(res.data.products);
    });
  }, [setProducts]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.category.includes(filter))
    );
  }, [filter]);

  return (
    <>
      <ProductsContainer>
        <ProductsFilter onClickHandler={onClickHandler} />
        {filteredProducts.map((product) => (
          <ProductContainer
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            color={product.color}
            quantity={product.quantity}
          />
        ))}
      </ProductsContainer>
    </>
  );
};

const ProductsContainer = styled.div`
  display: flex;
`;

export default ProductList;
