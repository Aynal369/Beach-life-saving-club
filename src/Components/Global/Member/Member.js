import {
  faCartPlus,
  faDollarSign,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Member = (props) => {
  const { imgURL, name, position, address, phone, email, donations } =
    props.data;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card shadow h-100 border-0">
        <div className="text-center m-3">
          <img
            src={imgURL}
            className="rounded-circle shadow"
            alt={name}
            width="150px"
          />
        </div>
        <div className="card-body">
          <h4 className="text-center text-primary fw-normal mb-4">
            {position}
          </h4>
          <hr />
          <div className="d-flex">
            <FontAwesomeIcon icon={faUserTie} className="text-secondary mt-1" />
            <p className="ms-3 text-muted">
              <strong>Name: </strong> {name}
            </p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-secondary mt-1"
            />
            <p className="ms-3 text-muted">
              <strong>Address: </strong>
              {address}
            </p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon
              icon={faPhoneAlt}
              className="text-secondary mt-1"
            />
            <p className="ms-3 text-muted">
              <strong>Phone: </strong> {phone}
            </p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-secondary mt-1"
            />
            <p className="ms-3 text-muted">
              <strong>Email: </strong>
              {email}
            </p>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-secondary mt-1"
            />
            <p className="ms-3 text-muted">
              <strong>Donations: </strong>
              <span className="text-danger fw-bold">$ {donations}</span>
            </p>
          </div>
        </div>
        <div className="mx-auto pb-2">
          <button
            onClick={() => props.handleAddToCart(props.data)}
            type="button"
            className="btn btn-outline-primary"
          >
            <FontAwesomeIcon icon={faCartPlus} /> <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Member;
