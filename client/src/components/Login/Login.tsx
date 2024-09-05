import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Image } from "antd";
import { Login as LoginModel } from "../../models/Login";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: LoginModel) => {
    const data = await fetch(API_BASE_URL + "login", {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const result = await data.json();
    if (result) {
      navigate("/home");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          preview={false}
          width={"50vw"}
          height={"90vh"}
          src="public/vote.jpeg"
        />
      </div>
      <div
        style={{
          display: "flex",
          placeContent: "center",
          alignContent: "center",
          flexFlow: "column",
        }}
      >
        <UserOutlined
          style={{
            fontSize: "100px",
            color: "grey",
            display: "flex",
            justifyContent: "center",
          }}
        />
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <Link to={"/register"}> Register </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
