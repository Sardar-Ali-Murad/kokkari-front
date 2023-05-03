import React from "react";
import "./Book.css";
import Img from "../assets/book.jpg";

import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
// import Moment from "react-moment";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios, { toFormData } from "axios";

const Book = () => {
  // const [date, setDate] = React.useState(new Date());
  const [date, setDate] = React.useState(moment().format("YYYY-MM-DD"));
  const [startTime, onChange] = React.useState("10:00");
  const [endTime, onChangeEnd] = React.useState("10:00");

  const onChangeDate = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDate(newDate);
  };

  // var today = new Date().toLocaleDateString();
  // let later=new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()

  let [info, setInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
    person: "",
  });

  function handleInfo(e) {
    setInfo((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  // let url = "http://localhost:5000";
    let url="https://merry-resturant-back.vercel.app"


  console.log(startTime)
  console.log(endTime)

  const Book = async () => {
    try {
      await axios.post(`${url}/api/v1/book`, {
        name: info.name,
        email: info.email,
        person: Number(info.person),
        phone: Number(info.phone),
        date: date,
        startTime: startTime,
        endTime: endTime,
      });
      toast.success("Booking is created Successfully", {
        position: toast.POSITION.TOP_RIGHT
    });
    } catch (error) {
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="bookMain">
      <div className="bookContent">
        <div className="reservationPara">
          <div className="bookLine"></div>
          <p>Reservation</p>
          <div className="bookLine"></div>
        </div>
        <h1>Book your table now</h1>
        <p>
          Take a look at Restaurantate fabulous menu. And then use our online
          booking system to book a table instantly!
        </p>

        <div className="bookTextFields">
          <input
            className="textField"
            placeholder="Name"
            name="name"
            onChange={handleInfo}
            value={info.name}
          />
          <input
            className="textField"
            placeholder="Email"
            name="email"
            onChange={handleInfo}
            value={info.email}
          />
          <input
            className="textField"
            placeholder="Phone"
            name="phone"
            onChange={handleInfo}
            value={info.phone}
            // type="Number"
          />
          <input
            type="date"
            className="textField"
            value={date}
            onChange={(e) => onChangeDate(e)}
          />
          <TimePicker
            onChange={onChange}
            value={startTime}
            className="textField"
            style={{ width: "100%" }}
          />
          <TimePicker
            onChange={onChangeEnd}
            value={endTime}
            className="textField"
            style={{ width: "100%" }}
          />
        </div>
        <input
          className="textField"
          placeholder="Person"
          name="person"
          onChange={handleInfo}
          type="Number"
          value={info.person}
        />
        {/* <ToastContainer /> */}
        <button className="bookBtn" onClick={Book}>
          Book Me
        </button>
      </div>

      <div className="bookImage">
        <img src={Img} />
      </div>
    </div>
  );
};

export default Book;
