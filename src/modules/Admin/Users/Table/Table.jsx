import { Table } from "../../../../components/ui"
import Coloums from "./Colums";
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