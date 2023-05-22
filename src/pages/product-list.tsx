import { useEffect, useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
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
  price: string;
  quantity: string;
}

const ProductList = () => {
  const products = useRecoilValue<ProductType[]>(productsAtom);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [filter, setFilter] = useState("Semua Produk");

  const filterHandler = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) setFilter(e.target.id);
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.category.includes(filter))
    );
  }, [filter, products]);

  return (
    <StyledProductList>
      <ProductsFilter filterHandler={filterHandler} filterState={filter} />
      <ProductsContainer>
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
    </StyledProductList>
  );
};

const StyledProductList = styled.div`
  display: flex;
  margin-top: 112px;
  padding: 0 20px 20px 20px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
`;

export default ProductList;
