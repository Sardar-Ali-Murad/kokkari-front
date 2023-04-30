import React from "react";
import "./Reservation.css";
import img from "../assets/reservation.jpg";
import { BiMap } from "react-icons/bi";
import { northBay, eastBay, southBay } from "./data";

const Reservation = () => {
  function mapOpen() {
    window.open(`https://maps.google.com/maps?q=Illinois USA.`);
  }
  return (
    <div className="reservationMain">
      {/*  */}

      <div className="reservationPart1">
        <div className="reservationContent">
          <h1 className="fancy-link">Reservations</h1>
          <div className="reservationLines">
            <div className="reservationLine"></div>
            <div className="reservationLine"></div>
          </div>
          <div className="reservationParas">
            <p>
              KOKKARI ESTIATORIO accepts reservations up to two months in
              advance to the calendar date.
            </p>
            <p>To reserve a table, please call 415.981.0983.</p>
            <p>
              Online reservations are 30 days in advance only. Make an online
              reservation through OpenTable
            </p>
            <p>We do not take reservations via email.</p>
          </div>
          <h1 className="fancy-link">Hours of Operation</h1>
          <div className="reservationTimings">
            <h2 className="fancy-link">Lunch</h2>
            <p>Mon-Fri 11:30am to 2:30pm</p>
          </div>
          <div className="reservationTimings">
            <h2 className="fancy-link">Dinner</h2>
            <p>Monday-Sunday 5:00pm – 10:00pm</p>
          </div>
          <div className="reservationTimings">
            <h2 className="fancy-link">Corkage</h2>
            <p>
              $30 per 750ml bottle for up to 2 bottles, $50 per additional
              bottle
            </p>
          </div>
        </div>
        <div className="resevationImage">
          <img src={img} />
        </div>
      </div>

      {/*  */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6293463.190492726!2d-94.5560959736682!3d39.627652507812925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C%20USA!5e0!3m2!1sen!2s!4v1682785242184!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/*  */}

      {/*  */}
      <div className="googleMap">
        <BiMap />
        <p onClick={mapOpen}>Click here for mobile map</p>
      </div>
      {/*  */}
      <div className="reservationLines reservationLinesLast ">
        <div className="reservationLine"></div>
        <div className="reservationLine"></div>
      </div>

      {/*  */}

      {/*  */}
      <h2 className="fancy-link DirectionHeaders">From North Bay:</h2>
      <div className="directions">
        {northBay?.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      {/*  */}
      <h2 className="fancy-link DirectionHeaders">From North Bay:</h2>
      <div className="directions">
        {eastBay?.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      {/*  */}
      <h2 className="fancy-link DirectionHeaders">From North Bay:</h2>
      <div className="directions">
        {southBay?.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Reservation;
