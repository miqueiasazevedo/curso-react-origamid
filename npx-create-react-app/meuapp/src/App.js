import React from "react";
import Introducao from "./Introducao";
import Arrays from "./Arrays";
import Form from "./Form/Form";
import DesafioProdutos from "./DesafioProdutos/DesafioProdutos";
import Products from "./LoadProductsUseState/Products";
import LoadPreferenceProduct from "./LoadPreferenceProductUseEfect/LoadPreferenceProduct";
import Product from "./LoadProductWithUseContext/Product";
import { GlobalStorage } from "./LoadProductWithUseContext/GlobalContext";

const App = () => {
  return (
    <>
      <Introducao />
      <Arrays />
      <Form />
      <DesafioProdutos />
      <Products />
      <LoadPreferenceProduct />
      <GlobalStorage>
        <Product />
      </GlobalStorage>
    </>
  );
};

export default App;
