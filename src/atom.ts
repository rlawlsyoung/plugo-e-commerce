import { atom } from "recoil";

const productsAtom = atom({
  key: "products",
  default: [],
});

const cartAtom = atom({
  key: "cart",
  default: [],
});

export { productsAtom, cartAtom };
