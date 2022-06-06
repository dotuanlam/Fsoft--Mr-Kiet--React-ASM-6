import React, { useEffect, useState } from "react";
import { Row, Card, Avatar, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { EllipsisOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import Loading from "../Loading";
const { Meta } = Card;
const CocktailDetail = ({ onReRender }) => {
  const navigate = useNavigate();
  const [listCocktail, setListCocktail] = useState([]);
  console.log("🚀 ~ file: CocktailDetail.js ~ line 10 ~ CocktailDetail ~ listCocktail", listCocktail)
  const getData = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((res) => {
        setListCocktail(res?.drinks);
      });
  };
  const showInforCocktail = (id) => {
    navigate(`/${id}`);
  };
  useEffect(() => {
    getData();
    return () => {
      getData();
    };
  }, []);
  const onAddCard = (item) => {
    onReRender();
    localStorage.setItem(`${item.idDrink}`, JSON.stringify(item));
    return;
  };
  return (
    <div>
      <Row justify="center" wrap={true} span={24}>
        {listCocktail.length !== 0 ? listCocktail.map((item, index) => (
          <div key={item?.idDrink}>
            <Card
              style={{
                width: 300,
                margin: "5px",
                borderRadius: "1rem",
              }}
              cover={<img alt="img-cocktail" src={item.strDrinkThumb} />}
              actions={[
                <Button onClick={() => onAddCard(item, index)} type="primary">
                  Add Card
                  <AppstoreAddOutlined key="add" />
                </Button>,
                <Button onClick={() => showInforCocktail(item.idDrink)} type="">
                  Information
                  <EllipsisOutlined key="ellipsis" />
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
        )): <Loading/>}
      </Row>
    </div>
  );
};

export default CocktailDetail;
