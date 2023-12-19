import { Drawer } from "antd";

const CustomDrawer = (props) => {
    return (
        <Drawer {...props}>{props.children}</Drawer>
    )
}

export default CustomDrawer