import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

export default function Navbar() {
  const navigate  = useNavigate();
  const [userData, setUserData] = useState(null);
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
      if ((!contentType || !contentType.includes("application/json"))) {
        return;
      }
      if(!response.ok){
        setUserData({id: false});
        console.log("this is running");
        return;
      }
      const json = await response.json();
      // console.log(json);
      setUserData(json);
    };
    fetchData();
  }, []);

  const logout = () => {
    googleLogout();
    localStorage.clear();
    navigate("/");
  };


  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand brand-name fs-1" href="/">
          Safar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-link active fs-5 me-2"
              aria-current="page"
              href="/"
            >
              Home
            </a>
            <a className="nav-link fs-5 me-2" href="/#reviews">
              Reviews
            </a>
            <a className="nav-link fs-5 me-2" href="#">
              Bookings
            </a>
            <a className="nav-link fs-5 me-4" href="#footer">
              Contact
            </a>
          </div>
          <button className="btn  me-2 nav-button" type="button">
            User
          </button>
          {userData && userData.id === false ? (
            <a href="/login">
              <button className="btn  me-2 nav-button" type="button">
                Admin
              </button>
            </a>
          ) : (
              <button className="btn  me-2 nav-button" type="button" onClick={()=>{logout()}}>
                Logout
              </button>
          )}
        </div>
      </div>
    </nav>
  );
}
