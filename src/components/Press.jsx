import React from "react";
import "./Press.css";
import { Press as pressData } from "./data";
import { XMasonry, XBlock } from "react-xmasonry";

const Press = () => {
  return (
    <div className="pressMian">
      <div className="pressGrid">
    <  XMasonry responsive={true} smartUpdate={true}>
          {pressData?.map((item) => {
            return (
              <XBlock width={1}>
                <div className="pressCard">
                  <img src={item?.img} />
                  <div className="pressContent">
                    <h3>{item?.heading}</h3>
                    <h5>{item?.date}</h5>
                    <p>{item?.para}</p>
                  </div>
                </div>
              </XBlock>
            );
          })}
        </XMasonry>
      </div>
    </div>
  );
};

export default Press;
