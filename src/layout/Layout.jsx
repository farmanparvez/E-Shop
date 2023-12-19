import { Suspense } from "react";
import Navber from "../components/header/Header"
import { Layout } from 'antd';
import { Outlet } from "react-router-dom";
import { Loader } from "../components/ui";
import "./layout.scss"
const { Content } = Layout;

const LayoutContainer = () => {
    return (
        <Layout className="cs-layout">
            <Navber />
            <Layout style={{background: "#fff"}}>
                <Content className="layout" >
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutContainer