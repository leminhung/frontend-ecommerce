import { Pagination } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "src/store/product/product.action";
import Card from "./Cart";
import Loading from "./Loading";

const List = ({ loading, products, keyword }) => {
  return (
    <div className='row' style={{ paddingTop: "102px" }}>
      {loading ? (
        <Loading />
      ) : products && products.length === 0 ? (
        <>
          <h2>{`No result found for your search query: "${keyword}"`}</h2>
        </>
      ) : (
        products &&
        products.map((product) => (
          <Card
            key={product._id}
            product={product}
            id={product._id}
            countStock={product.countStock}
            rating={product.rating}
            numReviews={product.numReviews}
          />
        ))
      )}
    </div>
  );
};

const ProductList = ({ keyword }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, count, page, error } = productList;

  useEffect(() => {
    dispatch(listProducts(pageNumber, keyword));
  }, [dispatch, pageNumber, page, keyword]);

  return (
    <>
      <div className='container  justify-content-center mb-50'>
        <List loading={loading} products={products} keyword={keyword} />
        <div className='container text-center pt-5'>
          <Pagination
            current={pageNumber}
            total={typeof keyword !== "undefined" ? products.length : count}
            onChange={(value) => setPageNumber(value)}
            pageSize={8}
          />
        </div>
      </div>
    </>
  );
};

export default ProductList;
