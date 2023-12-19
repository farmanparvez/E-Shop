import { Table, Button } from "../../../../components/ui"
import { useDispatch } from "react-redux"
import Coloums from "./Colums";
import { PlusSquareTwoTone } from "@ant-design/icons";
import { setDrawerVisible } from "../../../../redux/reducers/userReducer.js";
import { Fragment } from "react";
import CsDrawer from "../Drawer/Drawer";
import Modal from "../Modal/Modal";

const index = (props) => {
    const { isLoading, isVisible, users, isDrawerVisible } = props

    const title = (
        <div className="table-title">
            <div className="table-title-color">
                <strong className="table-title-color">
                    <h3>User</h3>
                </strong>
            </div>
        </div>
    );

    return (
        <Fragment>
            <Table
                title={() => title}
                rowKey={(record) => record._id}
                loading={isLoading}
                columns={Coloums()}
                dataSource={users}
            />
            {isDrawerVisible.visible && <CsDrawer {...props} />}
            {isVisible.visible && <Modal {...props} />}
        </Fragment>
    )
}

export default index