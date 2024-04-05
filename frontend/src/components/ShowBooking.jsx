import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from "react-router";

const ShowBooking = () => {
    const [booking, setBooking] = useState(null);
    const { tourId } = useParams();
  useEffect(() => {
    let currUser = localStorage.getItem("token");
    // console.log(currUser);

    //Making API request to fetch user using token
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/booking/getorder/${tourId}`, {
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
        setBooking({ id: false });
        console.log("this is running");
        return;
      }
      const json = await response.json();
      console.log(json);
      setBooking(json);
    };
    fetchData();
  }, []);
  return (
    <div>{console.log(booking)}</div>
  )
}

export default ShowBooking