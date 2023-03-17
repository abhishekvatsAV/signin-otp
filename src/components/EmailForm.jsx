import React from "react";
import { useState, useRef } from "react";
import "./EmailForm.css";
import OtpForm from "./OtpForm";

const EmailForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [domain, setDomain] = useState("@gmail.com");
  const [hide, setHide] = useState(true);
  const [flag, setFlag] = useState(false);
  const [email, setEmail] = useState("");
  const btnRef = useRef(null);
  const nextRef = useRef(null);
  const arrowRef = useRef(null);

  const handleDomain = (event) => {
    setDomain(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const temp = username + domain;
    // console.log("temp: ", temp);
    setEmail(temp);
    setFlag(true);
  };

  return (
    <div className="emailform">
      {!flag ? (
        <div className="form" onSubmit={handleSubmit}>
          <h1>Welcome to Systempackage</h1>
          <label htmlFor="" className="input1">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={true}
              placeholder="Username"
            />
            <select value={domain} onChange={handleDomain}>
              <option value="@gmail.com">@gmail.com</option>
              <option value="@yahoo.com">@yahoo.com</option>
              <option value="@hotmail.com">@hotmail.com</option>
            </select>
          </label>
          <label htmlFor="" className="input2">
            <input
              type={hide ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required={true}
              placeholder="Password"
            />
            <div
              className="hideShow"
              onClick={(e) => setHide(hide === true ? false : true)}
            >
              {hide === true ? (
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hide"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L2.29289 10.2929C1.90237 10.6834 1.90237 11.3166 2.29289 11.7071C2.68342 12.0976 3.31658 12.0976 3.70711 11.7071L4.25815 11.1561C5.33075 11.6677 6.58799 12 8 12C10.4387 12 12.4157 11.0089 13.7772 9.81413C14.4569 9.2177 14.997 8.55904 15.3733 7.92362C15.735 7.3129 16 6.63067 16 6C16 5.36933 15.735 4.6871 15.3733 4.07637C14.997 3.44096 14.4569 2.7823 13.7772 2.18587C13.6808 2.10127 13.5813 2.01769 13.4788 1.93541L13.7071 1.70711ZM12.0537 3.36048L5.78764 9.62657C6.4543 9.86001 7.19468 10 8 10C9.87499 10 11.398 9.24113 12.4581 8.31087C12.9892 7.8448 13.3903 7.34721 13.6524 6.9045C13.9292 6.4371 14 6.11933 14 6C14 5.88067 13.9292 5.5629 13.6524 5.0955C13.3903 4.65279 12.9892 4.1552 12.4581 3.68913C12.33 3.57674 12.1951 3.46684 12.0537 3.36048Z"
                    fill="#7A7A85"
                  />
                  <path
                    d="M8 1.49012e-08C8.37892 1.49012e-08 8.74669 0.0239278 9.10274 0.0688294L7.11393 2.05765C5.64206 2.25127 4.4297 2.9101 3.54194 3.68913C3.01083 4.1552 2.60975 4.65279 2.34757 5.0955C2.07077 5.5629 2 5.88067 2 6C2 6.11495 2.06567 6.41404 2.31792 6.85365L0.868951 8.30262C0.781922 8.17582 0.701109 8.04927 0.626701 7.92362C0.265021 7.3129 0 6.63067 0 6C0 5.36933 0.265021 4.6871 0.626701 4.07637C1.003 3.44096 1.5431 2.7823 2.22278 2.18587C3.58425 0.991132 5.56128 1.49012e-08 8 1.49012e-08Z"
                    fill="#7A7A85"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="show"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 3C6.34315 3 5 4.34315 5 6C5 7.65685 6.34315 9 8 9C9.65685 9 11 7.65685 11 6C11 4.34315 9.65685 3 8 3ZM7 6C7 5.44772 7.44772 5 8 5C8.55228 5 9 5.44772 9 6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6Z"
                    fill="#7A7A85"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C5.56128 0 3.58425 0.991132 2.22278 2.18587C1.5431 2.7823 1.003 3.44096 0.626701 4.07638C0.265021 4.6871 0 5.36933 0 6C0 6.63067 0.265021 7.3129 0.626701 7.92362C1.003 8.55904 1.5431 9.2177 2.22278 9.81413C3.58425 11.0089 5.56128 12 8 12C10.4387 12 12.4157 11.0089 13.7772 9.81413C14.4569 9.2177 14.997 8.55904 15.3733 7.92362C15.735 7.3129 16 6.63067 16 6C16 5.36933 15.735 4.6871 15.3733 4.07638C14.997 3.44096 14.4569 2.7823 13.7772 2.18587C12.4157 0.991132 10.4387 0 8 0ZM2 6C2 5.88067 2.07077 5.5629 2.34757 5.0955C2.60975 4.65279 3.01083 4.1552 3.54194 3.68913C4.60204 2.75887 6.12501 2 8 2C9.87499 2 11.398 2.75887 12.4581 3.68913C12.9892 4.1552 13.3903 4.65279 13.6524 5.0955C13.9292 5.5629 14 5.88067 14 6C14 6.11933 13.9292 6.4371 13.6524 6.9045C13.3903 7.34721 12.9892 7.8448 12.4581 8.31087C11.398 9.24113 9.87499 10 8 10C6.12501 10 4.60204 9.24113 3.54194 8.31087C3.01083 7.8448 2.60975 7.34721 2.34757 6.9045C2.07077 6.4371 2 6.11933 2 6Z"
                    fill="#7A7A85"
                  />
                </svg>
              )}
            </div>
          </label>

          <button className="loginBtn" onClick={handleSubmit}>
            Next
          </button>
          <a href="">Forget your password?</a>
        </div>
      ) : (
        <OtpForm email={email} setFlag={setFlag} />
      )}
    </div>
  );
};

export default EmailForm;
