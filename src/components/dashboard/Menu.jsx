import {
  DashboardOutlined,
  MedicineBoxOutlined,
  UserAddOutlined,
  SettingOutlined,
  CreditCardOutlined,
  WalletOutlined
} from "@ant-design/icons";

const Menu = () => {
  // User: "1287",
  // Admin: "3497",
  const memu = [
    {
      icon: <DashboardOutlined />,
      name: "Profile",
      link: "/profile",
      id: "/profile",
      roles: ['1287', '3497'],
    },
    {
      icon: <CreditCardOutlined />,
      name: "order",
      link: "/user/order",
      id: "/user/order",
      roles: ['1287'],
    },
    // admin--------------------------------------------------------------------------->
    {
      icon: <MedicineBoxOutlined />,
      name: "User",
      link: "/user",
      id: "/user",
      roles: ['3497'],
    },
    {
      icon: <CreditCardOutlined />,
      name: "Product",
      link: "/product",
      id: "/product",
      roles: ['3497'],
    },
    {
      icon: <CreditCardOutlined />,
      name: "order",
      link: "/admin/order",
      id: "/admin/order",
      roles: ['3497'],
    },

  ];
  return memu;
};

export default Menu;
