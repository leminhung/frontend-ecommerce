import React from "react";
import "antd/dist/antd.css";

import ProductList from "./component/ProductList";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Menu from "./component/Menu";
import "./App.css";

const App = ({ match }) => {
  const keyword = match.params.keyword;

  return (
    <>
      <Menu />
      <Header />
      <ProductList keyword={keyword} />
      <Footer />
    </>
  );
};

export default App;
