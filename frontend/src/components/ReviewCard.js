import React from "react";
import "./ReviewCard.css"

export default function ReviewCard() {
  return (
    <div className="review-card">
      <div className="card">
        <div className="card-body">
          <h6 className="card-title heading-text">Goa Trip</h6>
          <h6 className="card-text body-text">
            Safar made our trip unforgettable! Exceptional service and
            breathtaking experiences. Highly recommend!
          </h6>
        </div>
        <footer className="blockquote-footer footer-text me-3 mt-1 justify-content-end d-flex">
          Bikash Dalai{" "}
        </footer>
      </div>
    </div>
  );
}
