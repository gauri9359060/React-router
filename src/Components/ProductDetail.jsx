import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  margin: auto;
  padding: 60px;
  width: 400px;
  text-align: center;
`;

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((response) => response.json())
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      {!product.id ? (
        <h1>Product Not Found</h1>
      ) : (
        <>
          <h1>
            Product Name : {product.name}
          </h1>
          <h2>Product Price : {product.price}</h2>
        </>
      )}
    </Container>
  );
};

export default ProductDetail;
