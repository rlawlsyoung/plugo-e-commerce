import { atom } from "recoil";

import { ProductType } from "./pages/product-list";

const productsAtom = atom<ProductType[]>({
  key: "products",
  default: [],
});

const cartAtom = atom({
  key: "cart",
  default: [],
});

export { productsAtom, cartAtom };
