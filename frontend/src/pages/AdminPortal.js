import React from "react";
import Navbar from "../components/Navbar";
import "./AdminPortal.css";
import TourCard from "../components/TourCard";
import SidebarCustom from "../components/SidebarCustom";
import { useEffect, useState } from "react";

export default function AdminPortal() {
  const [userData, setUserData] = useState(null);
  const [Tour, setTour] = useState(null);

  useEffect(() => {
    let currUser = localStorage.getItem("token");
    // console.log(currUser);

    //Making API request to fetch user using token
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/auth/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: currUser,
        },
      });
      // console.log(response);
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        return;
      }
      if (!response.ok) {
        setUserData({ id: false });
        console.log("this is running");
        return;
      }
      const json = await response.json();
      // console.log(json);
      setUserData(json);
    };
    fetchData();

    const fetchPin = async ()=>{

      const response = await fetch("http://localhost:8080/api/pin/displayAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: currUser,
        },
      });
      // console.log(response);
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        return;
      }
      if (!response.ok) {
        setTour({ tourId: false });
        console.log("this is running");
        return;
      }
      const json = await response.json();
      // console.log(json);
      setTour(json);

    }
    fetchPin();
  }, []);


  return (
    <div className="container d-flex flex-column">
      <Navbar />
      <div className="row">
        <div className="col-3">
          <SidebarCustom />
        </div>
        <div className="col-9">
          <div className="welcome-user">
            {userData ? (
              <h4 className="welcome-text pt-3 text-muted">
                Welcome {userData.name}
              </h4>
            ) : (
              <h4 className="welcome-text pt-3 text-muted">Welcome User</h4>
            )}
          </div>
          <h4 className="mt-4">All Packages</h4>
          <hr></hr>
          {
            Tour?.map((data)=>
              <TourCard data={data}/>
            )
          }
        </div>
      </div>
    </div>
  );
}
