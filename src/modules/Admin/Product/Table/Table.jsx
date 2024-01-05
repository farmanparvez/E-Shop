import { Table, Button } from "../../../../components/ui"
import { useDispatch } from "react-redux"
import Coloums from "./Colums";
import { PlusSquareTwoTone } from "@ant-design/icons";
import { setDrawerVisible } from "../../../../redux/reducers/productReducer";
import { Fragment } from "react";
import CsDrawer from "../Drawer/Drawer";
import Modal from "../Modal/Modal";

const Index = (props) => {
    const { isLoading, isVisible, adminProductList, isDrawerVisible } = props
    const dispatch = useDispatch()

    const title = (
        <div className="table-title">
            <div className="table-title-color">
                <strong className="table-title-color">
                    <h3>Products</h3>
                </strong>
            </div>
            <div>
                <Button
                    type="primary"
                    icon={<PlusSquareTwoTone />}
                    onClick={() =>
                        dispatch(setDrawerVisible({ type: "create", visible: true }))
                    }
                >
                    Create Product
                </Button>
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
                dataSource={adminProductList}
            />
            {isDrawerVisible.visible && <CsDrawer {...props} />}
            {isVisible.visible && <Modal {...props} />}
        </Fragment>
    )
}

export default Index