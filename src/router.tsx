import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "./pages/home";
import ProductList from "./pages/product-list";
import GlobalStyle from "./styles/global-style";
import Header from "./components/header/header";
import CreateProduct from "./pages/create-product";
import ProductDetail from "./pages/product-detail";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Header />
      </RecoilRoot>
    </BrowserRouter>
  );
}
export default Router;
