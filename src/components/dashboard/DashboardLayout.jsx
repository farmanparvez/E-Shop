import React, { Suspense } from 'react'
import { Layout, Menu, theme, Spin } from 'antd';
import menu from "./Menu";
import { NavLink, Outlet } from 'react-router-dom';
import "./dashboardLayout.scss"
import { USERDETAILS } from '../../utils/enviroment';
const { Content, Sider } = Layout;

const DashboardLayout = () => {
    const user = JSON.parse(localStorage.getItem(USERDETAILS))
    const filteredMenu = menu().filter(menu => menu?.roles.includes(user?.role))

    return (
        <Layout className='layoutWrapper'>
            <Sider className='sidebar-cs '
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logoContainer" >
                    <div className="logo" >
                        {user ? user?.username : UN}
                    </div>
                </div>
                <hr />
                <Menu
                    style={{ padding: "0" }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}
                    items={filteredMenu?.map((icon) => ({
                        key: icon.id,
                        icon: icon.icon,
                        label: (
                            <>
                                <NavLink to={icon.link}>
                                    <span >{icon.name}</span>
                                </NavLink>
                            </>
                        ),
                    }))}
                />
            </Sider>
            <Layout>
                <Content className="contentWrapper">
                    <Suspense fallback={<Spin className="suspence-spin" />}>
                        <Outlet />
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    )
}

export default DashboardLayout