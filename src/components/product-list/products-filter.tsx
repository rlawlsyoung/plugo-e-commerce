import styled from "styled-components";

import { darkGreen } from "../../styles/theme";

interface Props {
  onClickHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const filterList = ["Semua Produk", "Produk Unggulan", "Produk Baru"];

const ProductsFilter: React.FC<Props> = ({ onClickHandler }) => {
  return (
    <StyledProductsFilter>
      {filterList.map((filter) => (
        <div id={filter} key={filter} onClick={onClickHandler}>
          {filter}
        </div>
      ))}
    </StyledProductsFilter>
  );
};

const StyledProductsFilter = styled.div`
  color: ${darkGreen};
`;

export default ProductsFilter;
