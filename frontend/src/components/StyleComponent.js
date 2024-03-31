import React from "react";
import travel from "../images/icons/travel.png"
import destination from "../images/icons/destination.png"
import bill from "../images/icons/credit-card.png"
import suitcase from "../images/icons/suitcase.png"
import "./StyleComponent.css"
import world from "../images/world.jpg"

export default function StyleComponent() {
  return (
    <div className="container py-5">
      <div className="row ">
        <div className="col-6">
          <h4 className="text-uppercase first-heading">Easy and fast</h4>
          <h2 className="fw-bold second-heading ">Book Your Next Trip</h2>
          <ul className="list-unstyled mt-5">
            <li className="d-flex ">
              <img
                src={travel}
                alt="Icon"
                class="img-fluid  my-auto icons"
                style={{width: "40px", height: "40px"}}
              />
              <div className="ms-4" >
                <h5 className="mb-0 text-muted fw-bold">Make a Choice</h5>
                <p className="mb-0">Start Exploring new Tours and choose your favourite one.</p>
              </div>
            </li>
          </ul>
          <ul className="list-unstyled mt-2">
            <li className="d-flex ">
              <img
                src={destination}
                alt="Icon"
                class="img-fluid  my-auto icons"
                style={{width: "40px", height: "40px"}}
              />
              <div className="ms-4" >
                <h5 className="mb-0 text-muted fw-bold">Make Payment</h5>
                <p className="mb-0">Complete your payment using any options.</p>
              </div>
            </li>
          </ul>
          <ul className="list-unstyled mt-2">
            <li className="d-flex ">
              <img
                src={suitcase}
                alt="Icon"
                class="img-fluid my-auto icons"
                style={{width: "40px", height: "40px"}}
              />
              <div className="ms-4" >
                <h5 className="mb-0 text-muted fw-bold">Back Your Pack</h5>
                <p className="mb-0">Take your necessary things and start preparing for the adventure.</p>
              </div>
            </li>
          </ul>
          <ul className="list-unstyled mt-2">
            <li className="d-flex ">
              <img
                src={bill}
                alt="Icon"
                class="img-fluid my-auto icons"
                style={{width: "40px", height: "40px"}}
              />
              <div className="ms-4" >
                <h5 className="mb-0 text-muted fw-bold">Reach Airport and Enjoy</h5>
                <p className="mb-0">Reach the airport at time and rest will be take care of by us.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-6 text-center">
        <img src={world} className="img-fluid world-img rounded-circle shadow " alt="Not found" />
        </div>
      </div>
    </div>
  );
}