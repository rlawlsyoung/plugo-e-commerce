import { atom } from "recoil";

import { ProductType } from "./pages/product-list";
import { CartProductType } from "./pages/product-detail";

const productsAtom = atom<ProductType[]>({
  key: "products",
  default: [],
});

const cartAtom = atom<CartProductType[]>({
  key: "cart",
  default: [],
});

export { productsAtom, cartAtom };
