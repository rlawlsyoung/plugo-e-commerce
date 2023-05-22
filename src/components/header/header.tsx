import { Link } from "react-router-dom";
import styled from "styled-components";

import { bgColor, deepDarkGreen } from "../../styles/theme";

const menuList = [
  { text: "HOME", url: "/" },
  { text: "ALL PRODUCTS", url: "/products" },
  { text: "CREATE PRODUCT", url: "/create" },
  { text: "CART", url: "/cart" },
];

const Header = () => {
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
`;

export default Header;
