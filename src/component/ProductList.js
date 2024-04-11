// src/component/ProductList.js
// ProductList.js
import React, { useEffect, useState } from "react";
import fetchProducts from "../redux/actions/ProductActions.js"; // Import the fetchProducts function
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Check if products state is empty before fetching products
    if (products.length === 0) {
      const getProducts = async () => {
        try {
          const productsData = await fetchProducts();
          setProducts(productsData);
        } catch (error) {
          console.error(error.message);
        }
      };

      getProducts();
    }
  }, [products]); // Add products to the dependency array to watch for changes

  console.log("abc", products);

  return (
    <Container>
      <h1>Product</h1>
      <Row xs={1} md={2} lg={4} >
        {products.map((product) => (
          <Col key={product.id} className={styles.product}>
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ width: "50%", height: "50%" }}
              />
              <Card.Body className={styles.cardBody}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    Price: ${product.price}
                  
                </Card.Text>
                <Card.Text>
                    {/* Price: ${product.price} */}
                    Rating: {product.rating.rate} ({product.rating.count}{" "}
                    reviews)
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
