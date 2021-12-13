import {
  faDollarSign,
  faSortDown,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  for (const data of cart) {
    total = total + data.donations;
  }

  return (
    <>
      <div className="mt-5 shadow p-3">
        <div className="d-flex justify-content-between">
          <FontAwesomeIcon icon={faUserTie} className="mt-1" />
          <p>Members added:</p>
          <h5> {cart.length}</h5>
        </div>
        <div className="d-flex justify-content-between">
          <FontAwesomeIcon icon={faDollarSign} className="mt-1" />
          <p className="ms-2">Total donations:</p>
          <h5 className="text-danger"> {total}</h5>
        </div>
        <hr />
        <div className="text-center mb-3">
          <h5>Members Name</h5>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        {cart.map((data, index) => {
          const { name } = data;
          return (
            <div key={index}>
              <ul className="list-unstyled d-flex text-muted">
                <FontAwesomeIcon icon={faUserTie} className="mt-1" />
                <li className="ms-3">{name}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
