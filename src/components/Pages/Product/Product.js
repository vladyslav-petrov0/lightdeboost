import React, { useContext, useEffect } from "react";
import { useFetch } from "../../customHooks";
import { ServiceContext } from "../../context/ServiceContext";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import Title from "../../Title/Title";
import OurProducts from "../../OurProducts/OurProducts";
import ProductPageTabs from "./Tabs/Tabs";
import Container from "../../UI/Container/Container";

import styles from "./Product.module.scss";
import Product from "../../Product/Product";

const ProductPage = () => {
  const { id } = useParams();
  const { service } = useContext(ServiceContext);
  const { fetchData, data, loading, error } = useFetch(() =>
    service.getProductById(id)
  );

  useEffect(() => fetchData(), [id]);

  if (loading || !data) {
    return null;
  }

  const { title, information, reviews } = data;

  return (
    <>
      <Breadcrumbs className={styles.Breadcrumbs} />

      <Container className={styles.TitleWrapper}>
        <Title size="lg">{title}</Title>
      </Container>

      <main>
        <Product {...data} />
        <ProductPageTabs information={information} reviews={reviews} />
        <OurProducts className={styles.OurProducts} />
      </main>
    </>
  );
};

export default ProductPage;
