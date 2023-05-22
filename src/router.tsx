import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import ProductList from "./pages/product-list";
import GlobalStyle from "./styles/global-style";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
export default Router;
