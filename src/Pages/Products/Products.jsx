import React from "react";
import { Link, useParams } from "react-router-dom";
import { GridContainer } from "../../Styles/GridContainer";
import useGetProductById from "../../Components/Hooks/useGetProductById";
import LikeButton from "../../Components/Partials/LikeButton";
import Card from "../../Components/Partials/Card";

const Products = () => {
  const { id } = useParams();
  const { state: categories } = useGetProductById("categories", id);

  // const { increaseCartQuantity } = useShoppingCardStore();

  return (
    <GridContainer>
      {categories?.item?.products?.map((item, i) => (
        <Card key={i}>
          <Link to={`/productdetails/${item.id}`}>
            <img src={item.image.fullpath} alt={item.title} />
            <figcaption>
              <h3>{item.title}</h3>
            </figcaption>
            {/* <Button onClick={() => increaseCartQuantity(item.id, item.title, item.image.fullpath)}>Læg i kurv</Button> */}
          </Link>
          <LikeButton />
        </Card>
      ))}
    </GridContainer>
  );
};

export default Products;
