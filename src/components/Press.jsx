import React from "react";
import "./Press.css";
import { Press as pressData } from "./data";
import { XMasonry, XBlock } from "react-xmasonry";

const Press = () => {
  function seeMore() {
    window.open(`https://www.sfgate.com/food/#photo-566365`);
  }
  return (
    <div className="pressMian">
      <div className="pressGrid">
        <XMasonry responsive={true} smartUpdate={true}>
          {pressData?.map((item) => {
            return (
              <XBlock width={1}>
                <div className="pressCard">
                  <img src={item?.img} />
                  <div className="pressContent">
                    <h3>{item?.heading}</h3>
                    <h5>{item?.date}</h5>
                    <p>{item?.para}</p>
                    <p style={{ cursor: "pointer" }} onClick={seeMore}>
                      more
                    </p>
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
