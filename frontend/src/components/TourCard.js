import React from "react";

export default function TourCard({ data }) {
  return (
    <div>
      <div className="card my-3" style={{ maxWidth: "100vw" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={data?.image}
              className="img-fluid rounded-start"
              alt="Tour_image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data?.name}</h5>
              <p className="card-text">
                {data?.description}
              </p>
              <p className="card-text">
                <small className="text-muted">{data?.timestamp}</small>
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
