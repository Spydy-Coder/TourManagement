import React from "react";
import "./ReviewCard.css"

export default function ReviewCard() {
  return (
    <div className="review-card">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title heading-text">Goa Trip</h6>
          <h6 class="card-text body-text">
            Safar made our trip unforgettable! Exceptional service and
            breathtaking experiences. Highly recommend!
          </h6>
        </div>
        <footer class="blockquote-footer footer-text me-3 mt-1 justify-content-end d-flex">
          Bikash Dalai{" "}
        </footer>
      </div>
    </div>
  );
}
