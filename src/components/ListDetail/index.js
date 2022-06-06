import React, { useState, useEffect } from "react";
import { Button, Col, Row, Typography,Image } from "antd";
import { LogoutOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CocktailDetail from "./CocktailDetail";
import "./index.scss";
const ListDetail = () => {
  const [count, setCount] = useState(0);
  const [reRender, setReRender] = useState(0);
  console.log("🚀 ~ file: index.js ~ line 11 ~ ListDetail ~ count", count);
  const navigate = useNavigate();
  const onCardPageChange = () => {
    navigate("/card");
    return;
  };
  const onReRender = () => {
    setReRender(reRender + 1);
    console.log(reRender);
    return;
  };
  const getDataFromLocal = () => {
    const countLocal = Object.keys(localStorage).length;
    setCount(countLocal);
    return;
  };
  useEffect(() => {
    getDataFromLocal();
    return () => {
      getDataFromLocal();
    };
  }, [reRender]);
  const onLogout = () => {
    localStorage.clear();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error With SignOut");
      });
    return;
  };
  return (
    <div className="container__ListDetail">
      <header>
        <Row wrap={true} align="middle" justify="center" span={24}>
          <Col span={16}>
           
            <Typography.Title type="success">GoCong Cocktail  <Image style={{borderRadius:'1rem'}} width={30} height={30} src="https://i.pinimg.com/564x/04/8c/a5/048ca5126169c9ebd0f94a2bc069b1e5.jpg" /></Typography.Title>
          </Col>
          <Col span={8}>
            <Button
              onClick={onCardPageChange}
              style={{ marginBottom: "5px", marginRight: "5px" }}
              type="primary "
            >
              Card <ShoppingCartOutlined />
              <Typography.Text>{count} </Typography.Text>
            </Button>
            <Button onClick={onLogout} type="danger">
              Log Out <LogoutOutlined />
            </Button>
          </Col>
        </Row>
      </header>
      <CocktailDetail onReRender={onReRender} />
    </div>
  );
};

export default ListDetail;
