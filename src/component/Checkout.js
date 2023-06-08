import React, { useState } from "react";
import { Button, Modal, Image, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCheckout,
  updateBasket,
} from "../redux/ActionCreators";

// == Checkout Component ==
const Checkout = (props) => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.CheckoutModal)
  const [delivery, setDelivery] = useState(false);
  const { subtotal } = props;
  // const [showMessage, setShowMessage] = useState(false);
  const [values, setValues] = useState({
    cardNumber: "",
    cvv: "",
    fullName: "",
    phoneNumber: "",
    email: ""

  });
  const [formerrors, setFormErrors] = useState({});

  const taxRate = 0.1;
  const deliveryFee = delivery ? (subtotal ? 7.99 : 0) : 0;
  const total = subtotal * (1 + taxRate) + deliveryFee;

  // Determine Delivery from Checkbox is checked or not
  const determineDelivery = (evt) => {
    setDelivery(evt.target.checked);
    if (subtotal === 0) alert("You have to put something in the basket!");
  };

  const handleOrder = (total) => {
    const emptyBasket = new Array(0);

    if (validate(values)) {
    //  setShowMessage(true);
      dispatch(closeCheckout());
     dispatch(updateBasket(emptyBasket));
      total === 0
      ? alert("Your basket is empty.")
      : alert("We have received your order.");
      window.location.reload(false); // Refresh Page to see the updated empty basket
    } else {
     // setShowMessage(false); 
    }
  };

  //state value for that input
  const handleChange = (event) => {
    console.log(
      "handleChange -> " + event.target.name + " : " + event.target.value
    );

    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  //this method will check each field in your form. You define
  //the rules for each field
  const validate = () => {
    console.log("Validate the form....");

    let errors = {};

    //name field
    if (!values.cardNumber) {
      errors.cardNumber = "Card Number is required";
    }

    //cvv field
    if(!values.cvv) {
      errors.cvv = "CVV is required"
    }

    //email field
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if(!values.phoneNumber) {
      errors.phoneNumber  = "Phone Number is required"
    }
    
    if(!values.fullName) {
      errors.fullName = "Full Name is required"
    }
    console.log('error', errors)
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Modal show={show} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Subtotal: {`$${subtotal}`}</p>
        <p>Sales Tax: {`${taxRate * 100}%`}</p>
        <input type="checkbox" onChange={(evt) => determineDelivery(evt)} />
        {` Delivery: $${deliveryFee}`}
        <hr />
        <strong className="row row-content ml-1">
          Your total is {`$${total.toFixed(2)}`}
        </strong>
        <p>
          <Image
            src={
              "https://cdn.iconscout.com/icon/free/png-512/visa-3-226460.png"
            }
            width={70}
          />
          <Image
            src={
              "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/206_Mastercard_Credit_Card_logo_logos-512.png"
            }
            width={70}
          />
          <Image
            src={
              "https://i.pinimg.com/originals/6e/79/ac/6e79ac75e164ffa85f36f772fdaa41aa.png"
            }
            width={70}
          />
          <Image
            src={
              "https://www.discover.com/company/images/newsroom/media-downloads/discover@2x.png"
            }
            width={70}
          />
        </p>
        <Form>
          <Form.Group controlId="cardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="number" name="cardNumber" placeholder="Card Number" value={values.cardNumber} onChange={handleChange} required/>
            {formerrors.cardNumber && (
                    <p className="text-warning">{formerrors.cardNumber}</p>
            )}
          </Form.Group>
          <Form.Group controlId="CVV">
            <Form.Label>3-degit / 4-digit (Amex) Security Code</Form.Label>
            <Form.Control type="number" name="cvv" placeholder="Security Code" value={values.cvv} onChange={handleChange} required/>
            {formerrors.cvv && (
                    <p className="text-warning">{formerrors.cvv}</p>
            )}
          </Form.Group>

          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="fullName" value={values.fullName} onChange={handleChange} required/>
            {formerrors.fullName && (
              <p className="text-warning">{formerrors.fullName}</p>
            )}
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Physical Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone Number" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} required/>
            {formerrors.phoneNumber && (
                    <p className="text-warning">{formerrors.phoneNumber}</p>
            )}
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="E-mail" name="email" value={values.email} onChange={handleChange} required/>
            {formerrors.email && (
                    <p className="text-warning">{formerrors.email}</p>
            )}
          </Form.Group>
          <Form.Group controlId="RememberBuyer">
            <Form.Check type="checkbox" label="Save for later use" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-light" onClick={() => dispatch(closeCheckout())}>
          Later
        </Button>
        <Button className="btn-primary" onClick={() => handleOrder(total)}>
          Place Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Checkout;
