import React from "react";
import { useParams } from "react-router-dom";
import useGetProductById from "../../Components/Hooks/useGetProductById";
import Card from "../../Components/Partials/Card";
import { GridContainer } from "../../Styles/GridContainer";

const ProductDetails = () => {
  const { id } = useParams();
  const { state: products } = useGetProductById("products", id);

  return (
    <GridContainer>
      {products && products.item ? (
        <Card>
          <img src={products?.item?.image.fullpath} alt={products.title} />
          <figcaption>
            <h3>{products.item.title}</h3>
            <p>{products.item.teaser}</p>
          </figcaption>
        </Card>
      ) : (
        <p>Kan ikke indlæse data..</p>
      )}
    </GridContainer>
  );
};

export default ProductDetails;
