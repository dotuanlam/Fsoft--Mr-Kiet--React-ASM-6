import { Spin } from "antd";
import React from "react";
import "./index.scss";
const Loading = () => {
  return (
    <div className="container__loading">
      <Spin></Spin>
    </div>
  );
};

export default Loading;
