'use client';
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  
  return (
    <div className="w-full h-full flex justify-center items-center p-10 max-w-full ">
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{width: '50%',}}
      wrapperCol={{flex: 1}}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          // prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox onChange={(e)=> console.log(e.target.checked)
          }>Remember me</Checkbox>
        </Form.Item>

        
      </Form.Item> */}

      <Form.Item className="items-center justify-center">
        <Button type="primary" htmlType="submit" className="login-form-button bg-[#4096ff]">
          Log in
        </Button>
        
      </Form.Item>
    </Form>
    </div>
  );
};

export default login;
