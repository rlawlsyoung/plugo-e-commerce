import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import ProductList from "./pages/product-list";
import GlobalStyle from "./styles/global-style";
import Header from "./components/header/header";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
        <Header />
      </RecoilRoot>
    </BrowserRouter>
  );
}
export default Router;
