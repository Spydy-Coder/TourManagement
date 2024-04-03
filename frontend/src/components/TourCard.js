import React from "react";

export default function TourCard() {
  return (
    <div>
      <div className="card my-3" style={{ maxWidth: "100vw" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://as2.ftcdn.net/v2/jpg/06/60/47/93/1000_F_660479338_D5cROkaH1RBO3I9IT5XS243kTExc6Jgh.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex gap-3 justify-content-end">
        <button className="btn" style={{ minWidth: "90px" }}>
          Edit
        </button>
        <button className="btn" style={{ minWidth: "90px" }}>
          Delete
        </button>
      </div>
    </div>
  );
}
