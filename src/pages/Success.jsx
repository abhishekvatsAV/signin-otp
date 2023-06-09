import React, { useEffect, useRef } from "react";
import "./Success.css";

const Success = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      svgRef.current.style.margin = "40vh 0 0 50vw";
    }, 10);
  }, []);

  return (
    <div className="success">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
      >
        <circle
          cx="25"
          cy="7"
          r="3"
          transform="rotate(-180 25 7)"
          fill="#4ACD7C"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5711 4.0864C17.7017 4.10248 17.767 4.11052 17.8462 4.12715C18.8033 4.32794 19.2842 4.87171 19.3665 5.84616C19.3733 5.92687 19.3733 6.23847 19.3733 6.86168C19.3733 10.0456 21.9544 12.6267 25.1383 12.6267C25.7615 12.6267 26.0731 12.6267 26.1538 12.6335C27.1283 12.7158 27.6721 13.1967 27.8729 14.1538C27.8895 14.233 27.8975 14.2983 27.9136 14.4289C28.7582 21.2868 23.3084 28 16.0104 28H4V15.9896C4 8.69155 10.7132 3.24177 17.5711 4.0864ZM16.0104 18.3917H13.6083V15.9896C13.6083 14.663 14.6838 13.5875 16.0104 13.5875C17.337 13.5875 18.4125 14.663 18.4125 15.9896C18.4125 17.3162 17.337 18.3917 16.0104 18.3917Z"
          fill="#0858F7"
        />
      </svg>

      <p>Success!</p>
    </div>
  );
};

export default Success;
