import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Page } from "../../Layout/Page";
import useGetListItemsByEndPoint from "../../Components/Hooks/useGetListItemsByEndPoint";

const Categories = () => {
  const { state: categories } = useGetListItemsByEndPoint("categories");

  return (
    <Page title="Produkter">
      <h1>Produkter</h1>
      <ul>
        {categories?.items?.map((cat, i) => {
          return (
            <li key={i}>
              <Link key={cat.id} to={`/products/${cat.id}`}>
                {cat.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </Page>
  );
};

export default Categories;
