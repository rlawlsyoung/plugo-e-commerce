import styled from "styled-components";

import {
  clickedColor,
  darkGreen,
  hoveredColor,
  lightDarkGreen,
} from "../../styles/theme";

interface Props {
  filterHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  filterState: string;
}

const filterList = ["Semua Produk", "Produk Unggulan", "Produk Baru"];

const ProductsFilter: React.FC<Props> = ({ filterHandler, filterState }) => {
  return (
    <StyledProductsFilter>
      {filterList.map((filter) => (
        <Filter
          id={filter}
          key={filter}
          onClick={filterHandler}
          filter={filter}
          filterState={filterState}
        >
          {filter}
        </Filter>
      ))}
    </StyledProductsFilter>
  );
};

const StyledProductsFilter = styled.div`
  min-height: 600px;
  margin: 12px 12px 0 0;
  padding: 10px;
  border: 1px solid ${lightDarkGreen};
  border-radius: 5px;
  color: ${darkGreen};
`;

const Filter = styled.div<{ filterState: string; filter: string }>`
  display: flex;
  align-items: center;
  width: 260px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.filterState === props.filter && clickedColor};
  font-size: 14.5px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.filterState !== props.filter && hoveredColor};
  }
`;

export default ProductsFilter;
