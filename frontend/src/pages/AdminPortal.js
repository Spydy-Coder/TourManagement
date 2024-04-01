import React from "react";
import Navbar from "../components/Navbar";
import "./AdminPortal.css";
import TourCard from "../components/TourCard";
import SidebarCustom from "../components/SidebarCustom";

export default function AdminPortal() {
  return (
    <div className="container d-flex flex-column">
      <Navbar />
      <div className="row">
        <div className="col-3">
          <SidebarCustom />
        </div>
        <div className="col-9">
          <div className="welcome-user">
            <h4 className="welcome-text pt-3 text-muted">Welcome Bikash</h4>
          </div>
          <h4 className="mt-4">All Packages</h4>
          <hr></hr>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>
    </div>
  );
}
