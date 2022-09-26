import React, { useState } from "react";
import "./style.css";

const Card = ({ first_name, last_name, email, avatar }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((current) => !current);
  };
  return (
    <>
      <div className="card" style={{ height: open ? "260px" : "190px" }}>
        <div
          className="imgBx"
          style={{
            width: open ? "200px" : "150px",
            height: open ? "200px" : "150px",
            top: open ? "-30%" : "0",
          }}
        >
          <img src={avatar} alt="avatar" />
        </div>
        <div className="content">
          <div
            className="details"
            style={{
              transform: open ? "translateY(0px)" : "translateY(150px)",
            }}
          >
            <h2>
              {first_name} {last_name}
            </h2>
            <div className="data">
              <h3>{email}</h3>
            </div>
          </div>
        </div>
        <div
          className="arr down"
          onClick={handleClick}
          style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }}
        >
      
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Card;
