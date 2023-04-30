import React from "react";
import "./Dining.css";
import { dining } from "./data";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Dining = () => {
  return (
    <div className="diningMain">
      <p className="diningHeaders fancy-link">
        Private Dining and Special Events
      </p>
      <div>
        {dining?.map((item) => {
          return (
            <div>
              <h1 className="diningFlexHead">{item?.head}</h1>
              <div className="diningFlex">
                <div className="diningFlexContent">
                  <div className="cusineLinesMain">
                    <div className="cusineLines"></div>
                    <div className="cusineLines"></div>
                  </div>
                  <p>{item?.para}</p>
                </div>
                <div className="diningFlexImage">
                  <img src={item?.pic} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/*  */}

      <div className="diningCard">
        <div className="dingColumnFlex">
          <h1>Further Group Dining Information</h1>
          <p>
            For group dining options, room minimums and availability, please
            contact our Event Manager, Melissa Lopez.
          </p>
        </div>
        <div className="dingColumnFlex">
          <div className="diningFlexLast">
            <p>
              <BsPhone className="diningIcon" />
            </p>
            <p>415.981.0983</p>
          </div>
          <div className="diningFlexLast">
            <p>
              <AiOutlineMail className="diningIcon" />
            </p>
            <p>email@gmail.com</p>
          </div>
        </div>
        <div className="diningFlexLast">
          <p>
            <AiOutlineCloudDownload className="diningIcon" />
          </p>
          <p>Private Dining Packet or Lunch Event Packet</p>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Dining;
