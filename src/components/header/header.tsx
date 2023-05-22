import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { bgColor, deepDarkGreen, responsive } from "../../styles/theme";
import { ProductType } from "../../pages/product-list";
import { productsAtom } from "../../atom";

const menuList = [
  { text: "HOME", url: "/" },
  { text: "ALL PRODUCTS", url: "/products" },
  { text: "CREATE PRODUCT", url: "/create" },
  { text: "CART", url: "/cart" },
];

const Header = () => {
  const setProducts = useSetRecoilState<ProductType[]>(productsAtom);

  useEffect(() => {
    axios({
      url: "/public/mock-data.json",
      method: "get",
    }).then((res) => {
      setProducts(res.data.products);
    });
  }, [setProducts]);

  return (
    <StyledHeader>
      <MenuWrapper>
        <ul>
          {menuList.map((menu) => (
            <Link to={menu.url} key={menu.text}>
              <Menu>{menu.text}</Menu>
            </Link>
          ))}
        </ul>
      </MenuWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 112px;
  background-color: ${bgColor};
`;

const MenuWrapper = styled.nav`
  ul {
    display: flex;
  }
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  color: ${deepDarkGreen};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  @media ${responsive.mobile} {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

export default Header;
