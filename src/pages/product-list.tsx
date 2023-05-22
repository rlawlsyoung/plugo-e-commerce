import { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

import ProductContainer from "../components/product-list/product-container";
import { productsAtom } from "../atom";

export interface ProductType {
  id: string;
  category: string;
  color: string;
  image: string;
  name: string;
  price: number;
  quantity: string;
}

const ProductList = () => {
  const [products, setProducts] = useRecoilState<ProductType[]>(productsAtom);

  useEffect(() => {
    axios({
      url: "/public/mock-data.json",
      method: "get",
    }).then((res) => {
      setProducts(res.data.products);
    });
  }, [setProducts]);

  return (
    <>
      {products &&
        products.map((product) => (
          <ProductContainer
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            color={product.color}
            quantity={product.quantity}
          />
        ))}
    </>
  );
};

export default ProductList;
