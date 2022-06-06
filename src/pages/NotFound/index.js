import React from "react";
import { Image, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const onBackToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Image
        style={{ borderRadius: "10px" }}
        src="https://i.pinimg.com/564x/a7/d5/9b/a7d59b4a542b273c11fc9c710a4814d0.jpg"
      />
      <Typography.Title
        onClick={onBackToHome}
        style={{ cursor: "pointer" }}
        underline={true}
        type="secondary"
      >
        Back to Home here
      </Typography.Title>
    </div>
  );
};

export default NotFound;
