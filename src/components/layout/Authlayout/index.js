import React, { Suspense } from "react";
import { Layout } from "antd";
import { Outlet, } from "react-router-dom";


const { Content } = Layout;

const AuthLayout = () => {
  

  return (
    <Layout className="min-h-screen">
      <Layout className="mt-16">
        <Content className=" ">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
