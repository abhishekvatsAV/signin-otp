import React from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import Success from "../pages/Success";
import "./OtpForm.css";
import { useNavigate } from "react-router-dom";

const OtpForm = ({ email, setFlag }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const handleBack = () => {
    setFlag(false);
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([
      ...otp.map((d, idx) => {
        idx === index ? element.value : d;
      }),
    ]);

    // focus on next input
    if (element.nextSibling) element.nextSibling.focus();
  };

  const Completionist = () => <span className="timeout" onClick={handleClick}>Resend Code</span>;

  const handleClick = () => {
    navigate("/success");
  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
          <p className="timer">
            Resend
            <span>
              {" "}{minutes}:{seconds}
            </span>
          </p>
        </>
      );
    }
  };

  return (
    <>
        <div>
          <div className="form">
            <h1>Enter the verification code to continue</h1>
            <p>
              We sent to <span>{email}</span> . If you don`t see it, check your
              spam.
            </p>

            <div className="otp-bx">
              {otp.map((data, index) => {
                return (
                  <input
                    type="text"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>

            <div className="last">
              <div className="backBtn" onClick={handleBack}>
                Back
              </div>
              <div className="resend" onClick={handleClick}>
                <Countdown date={Date.now() + 10000} renderer={renderer} />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default OtpForm;
