import React, { useState, useEffect } from "react";
import "./index.scss";
import { Button, Card, Col, Row, Typography, Avatar } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";
const { Meta } = Card;
const DetailListCocktail = () => {
  const navigate = useNavigate();
  const [infor, setInfor] = useState([]);
  const params = useParams();
  const getInforCocktail = () => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setInfor(res?.drinks);
      });
  };
  useEffect(() => {
    getInforCocktail();
    return () => {
      getInforCocktail();
    };
  }, []);
  const onBackHome = () => {
    navigate("/");
    return;
  };

  return (
    <div className="container__DetailList">
      <header>
        <Row span={24} align="middle" justify="center">
          <Col sm={24} lg={14} md={22} xl={20}>
            <Typography.Title type="success">
              Information about Cocktail you need!
            </Typography.Title>
          </Col>
          <Col>
            <Button onClick={onBackHome} type="danger">
              Back
            </Button>
          </Col>
        </Row>
      </header>
      { infor.length!==0? infor.map((item) => (
        <div key={item.idDrink}>
          <Row wrap={true} justify="center" span={24}>
            <Col>
              <Card
                style={{
                  minWidth: "20rem",
                  maxWidth: "30rem",
                  margin: "20px",
                  padding: "20px",
                }}
                cover={<img alt="img-cocktail" src={item.strDrinkThumb} />}
                actions={[]}
              >
                <Meta
                  avatar={<Avatar src={item.strDrinkThumb} />}
                  title={item.strDrink}
                  description={item.strCategory}
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={{
                  minWidth: "20rem",
                  maxWidth: "30rem",
                  margin: "20px",
                  padding: "20px",
                }}
              >
                <Meta
                  title={item?.strAlcoholic + " | " + item.strGlass}
                  description={
                    item?.strInstructions +
                    item?.strInstructionsDE +
                    item?.strInstructionsIT +
                    " " +
                    "Ingredient: " +
                    item?.strIngredient1 +
                    " | " +
                    item?.strIngredient2 +
                    " | " +
                    item?.strIngredient3 +
                    " | " +
                    item?.strIngredient4
                  }
                />
              </Card>
            </Col>
          </Row>
        </div>
      )): <Loading/>}
    </div>
  );
};

export default DetailListCocktail;
