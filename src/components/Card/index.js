import React, { useState, useEffect } from "react";
import { Row, Typography, Card, Avatar, Button, Col } from "antd";
import { RollbackOutlined } from "@ant-design/icons";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
const CardSelected = () => {
  const navigate = useNavigate();
  const [listSelected, setListSelected] = useState([]);
  const getCocktailFromLocal = () => {
    const selected = Object.values(localStorage);
    const arr = [];
    for (let i = 0; i < selected.length; i++) {
      arr.push(JSON.parse(selected[i]));
    }
    setListSelected(arr);
  };
  useEffect(() => {
    getCocktailFromLocal();
    return () => {
      getCocktailFromLocal();
    };
  }, []);
  const onRemoveCard = (item) => {
    for (let i = 0; i < listSelected.length; i++) {
      if (listSelected[i].idDrink === item.idDrink) {
        listSelected.splice(i, 1);
      }
      localStorage.removeItem(`${item.idDrink}`);
      setListSelected([...listSelected]);
    }
    return;
  };
  const onBackToHome = () => {
    navigate("/");
    return;
  };

  return (
    <div className="container__card">
      <header>
        <Row span={24} wrap={true} justify="center" align="center">
          <Col xs={19} sm={18} md={15} lg={13} xl={12}>
            <Typography.Title type="success">
              List Selected Detail
            </Typography.Title>
          </Col>
          <Col>
            <Button
              onClick={onBackToHome}
              style={{ margin: ".5rem 1rem 1rem 1rem" }}
              type="danger"
            >
              Back
              <RollbackOutlined />
            </Button>
          </Col>
        </Row>
      </header>
      <Row justify="center" wrap={true} span={20}>
        {listSelected.map((item) => (
          <div key={item.idDrink}>
            <Card
              style={{
                width: 300,
                margin: "5px",
                borderRadius: "1rem",
              }}
              cover={<img alt="img-cocktail" src={item.strDrinkThumb} />}
              actions={[
                <Button onClick={() => onRemoveCard(item)} type="danger">
                  Remove
                </Button>,
              ]}
            >
              <Meta
                avatar={<Avatar src={item.strDrinkThumb} />}
                title={item.strDrink}
                description={item.strCategory}
              />
            </Card>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default CardSelected;
