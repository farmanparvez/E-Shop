import { Table } from "../../../../components/ui"
import { useDispatch } from "react-redux"
import Coloums from "./Colums";
import { Fragment } from "react";

const index = (props) => {
    const { isLoading, allOrders } = props

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
                dataSource={allOrders}
            />
            {/* {isDrawerVisible.visible && <CsDrawer {...props} />} */}
            {/* {isVisible.visible && <Modal {...props} />} */}
        </Fragment>
    )
}

export default index