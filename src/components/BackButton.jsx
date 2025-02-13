import React from "react";
import "/src/BackButton.css"
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      ⬅
    </button>
  );
}
