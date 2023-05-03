import React from "react";
import img from "../assets/cusine1.jpg";
import "./ContactUs.css";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  let [info, setInfo] = React.useState({
    name: "",
    emailAddress: "",
    message: "",
  });

  function handleChange(e) {
    setInfo((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  let url="https://merry-resturant-back.vercel.app"
  // let url="http://localhost:5000"

  const contact = async () => {
    try {
      let data=await axios.post(`${url}/api/v1/contact`,{name:info.name,message:info.message,emailAddress:info.emailAddress})
      setInfo({
        name:"",
        emailAddress:"",
        message:""
      })
      toast.success('We have recieved your message successfully', {
        position: toast.POSITION.TOP_RIGHT
    });
    } catch (error) {
      toast.error(error?.response?.data?.msg, {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  };

  return (
    <div className="contactMain">
      {/* <ToastContainer/> */}
      <div className="conatactImage">
        <img src={img} />
      </div>

      <div className="contactContentMain">
        <h1 className="contactUsHeader">Contact Us</h1>
        <div className="contactUsPart2">
          <div className="contactTextFielddMain">
            <input
              placeholder="Full Name"
              className="nameField"
              value={info.name}
              name="name"
              onChange={handleChange}
            />
            <input
              placeholder="E-main"
              className="emailField"
              value={info.emailAddress}
              name="emailAddress"
              onChange={handleChange}
            />
            <input
              placeholder="Message"
              className="messageField"
              value={info.message}
              name="message"
              onChange={handleChange}
            />
            <button className="contactUsButton" onClick={contact}>
              Contact Us
            </button>
          </div>

          <div>
            <div className="contactUsContacts">
              <div>
                <p className="darkPara">Contact</p>
                <p className="lightPara">zillmol@gmail.com</p>
              </div>
              <div>
                <p className="darkPara">Based In</p>
                <p className="lightPara">
                  San Franciso, <br /> California
                </p>
              </div>

              <div className="contactIcons">
                <FaFacebookF />
                <RiInstagramFill />
                <BsTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
