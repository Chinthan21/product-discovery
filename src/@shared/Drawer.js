import React, { useState, useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import fetchProducts from "../redux/actions/ProductActions.js";
import Form from "react-bootstrap/Form";
const Drawer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [checked, setChecked] = useState(false);


  const products = [
    {
      "id" :1 ,
      "product": "Shirt",
      "label": "One Star"
    },
    {
      "id" :2,
      "product": "Pants",
      "label": "Two Stars"
    },
    {
      "id" :3,
      "product": "Bangales",
      "label": "Three Stars"
    },
    {
      "id" :4,
      "product": "Power Bank",
      "label": "Four Stars"
    },
    {
      "id" :5 ,
      "product": "Desktop",
      "label": "Five Stars"
    }
  ];
  const ratings = [
    {
      "id" :1 ,
      "rating": 1,
      "label": "One Star"
    },
    {
      "id" :2,
      "rating": 2,
      "label": "Two Stars"
    },
    {
      "id" :3,
      "rating": 3,
      "label": "Three Stars"
    },
    {
      "id" :4,
      "rating": 4,
      "label": "Four Stars"
    },
    {
      "id" :5 ,
      "rating": 5,
      "label": "Five Stars"
    }
  ];
  const prices = [
    {
      "id" :1 ,
      "price": "100-500",
      "label": "One Star"
    },
    {
      "id" :2,
      "price": "500-1000",
      "label": "Two Stars"
    },
    {
      "id" :3,
      "price": "1000-1500",
      "label": "Three Stars"
    },
    {
      "id" :4,
      "price": "1500-2000",
      "label": "Four Stars"
    },
    {
      "id" :5 ,
      "price": "2000 And Above",
      "label": "Five Stars"
    }
  ];
  

  return (
    <div>
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onClick={() => {
          handleShow();
          setChecked(!checked); // Toggle the checked state
        }}
      >
        Checked
      </ToggleButton>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4>Product</h4>
          {products.map((item) => (
            <div key={item.id}>
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check 
                      type={type}
                      id={`default-${type}`}
                      label={`${item.product}`}
                    />
                  </div>
                ))}
              </Form>
            </div>
          ))}
              <h4>Prices</h4>
            {prices.map((item) => (
              <div key={item.id}>
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${item.id}`}
                      label={`${item.price}`}
                      />
                  </div>
                ))}
              </Form>
                </div>
                  ))}
              <h4>Ratings</h4>
            {ratings.map((item) => (
              <div key={item.id}>
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${item.id}`}
                      label={`${item.rating}`}
                      />
                  </div>
                ))}
              </Form>
                </div>
                  ))}
<Button variant="primary">Save</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Drawer;
