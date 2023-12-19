"use client";
import SubmenuDoctrine from "@/app/doctrine/SubmenuDoctrine";
import SubmenuHomePage from "@/app/home/SubmenuHomePage";
import SubmenuNews from "@/app/news/SubmenuNews";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <header className="bg-white w-full">
      <nav
        className="mx-auto flex justify-center items-center p-5 lg:px-8 shadow-md h-full w-full"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative group ">
            <Link href="/" className="link">
              Trang chủ
            </Link>
          </div>
          <div className="relative group">
            <Link href="#" className="link bg-white">
              Tin tức
            </Link>
            <SubmenuNews />
          </div>
          <div className="relative group">
            <Link href="#" className="link">
              Giáo lý
            </Link>
            <SubmenuDoctrine />
          </div>
          <Link href="#" className="link">
            Thông báo
          </Link>
          <Link href="/introduce" className="link">
            Giới thiệu
          </Link>
          <Link href="#" className="link">
            Đóng góp ý kiến
          </Link>
        </div>
        <div className="absolute right-8">
          <Link href="/" className="link">
            <button onClick={() => setIsModalOpen(!isModalOpen)}>Login</button>
            <Modal
              title="Đăng nhập"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okButtonProps={{className: 'bg-primary'}}
              okText='Login'
              // confirmLoading={true}
            >
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ offset: 8, span: 16 }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit" className="bg-primary">
                    Submit
                  </Button>
                </Form.Item> */}
              </Form>
            </Modal>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
