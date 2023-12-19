import { Table, Button } from "../../../../components/ui"
import { useDispatch } from "react-redux"
import Coloums from "./Colums";
import { PlusSquareTwoTone } from "@ant-design/icons";
import { setDrawerVisible } from "../../../../redux/reducers/productReducer";
import { Fragment } from "react";

const index = (props) => {
    const { isLoading, orders } = props

    const title = (
        <div className="table-title">
            <div className="table-title-color">
                <strong className="table-title-color">
                    <h3>Orders</h3>
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
                dataSource={orders}
            />
            {/* {isDrawerVisible.visible && <CsDrawer {...props} />} */}
            {/* {isVisible.visible && <Modal {...props} />} */}
        </Fragment>
    )
}

export default index