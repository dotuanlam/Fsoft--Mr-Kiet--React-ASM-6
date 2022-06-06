import React from "react";
import { Button, Row, Typography, Image } from "antd";
import { GooglePlusOutlined, FacebookOutlined } from "@ant-design/icons";
import { auth } from "../../components/Firebase/index";
import { useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import "./index.scss";

const Login = () => {
  const navigate = useNavigate();
  const handleFacebookLognIn = () => {
    const fbProvider = new FacebookAuthProvider();
    signInWithPopup(auth, fbProvider)
      .then((res) => {
        if (res?.user) {
          navigate("/");
          return;
        } else {
          navigate("/login");
        }
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };
  const handleGoogleLognIn = () => {
    const ggProvider = new GoogleAuthProvider();
    signInWithPopup(auth, ggProvider)
      .then((res) => {
        if (res?.user) {
          navigate("/");
          return;
        } else {
          navigate("/login");
        }
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };

  return (
    <div className="container__login">
      <div className="container__login--content">
        <Row>
          <Typography.Title style={{ marginBottom: "2rem" }} type={"success"}>
            GoCong Cocktail
          </Typography.Title>
        </Row>
        <Row justify="center">
          <Image
            style={{ borderRadius: "50px" }}
            width={100}
            height={100}
            src="https://i.pinimg.com/564x/04/8c/a5/048ca5126169c9ebd0f94a2bc069b1e5.jpg"
          />
        </Row>
        <Row justify="center">
          <Typography.Title
            level={5}
            style={{ opacity: ".", marginTop: "2rem" }}
            underline={true}
            type={"secondary"}
          >
            Chọn hình thức đăng nhập bằng
          </Typography.Title>
        </Row>
        <Row justify="center">
          <Button
            onClick={handleGoogleLognIn}
            style={{ display: "block", marginBottom: 10 }}
            type="danger"
          >
            Đăng nhập bằng tài khoản GooGle <GooglePlusOutlined />
          </Button>
        </Row>
        <Row justify="center">
          <Button
            onClick={handleFacebookLognIn}
            style={{ display: "block" }}
            type="primary"
          >
            Đăng nhập bằng tài khoản Faccebook <FacebookOutlined />
          </Button>
        </Row>
      </div>
    </div>
  );
};

export default Login;
