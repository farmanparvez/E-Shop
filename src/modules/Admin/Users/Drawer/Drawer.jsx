import { Drawer } from "../../../../components/ui"
import { useDispatch } from "react-redux";
import { setDrawerVisible } from "../../../../redux/reducers/userReducer.js";
import ProductForm from "../Form/Form";

const CsDrawer = (props) => {
    const { isDrawerVisible } = props
    const dispatch = useDispatch()

    return (
        <Drawer
            title={
                // (isDrawerVisible.type === "create" && "Create Product") ||
                (isDrawerVisible.type === "edit" && "Update User") ||
                (isDrawerVisible.type === "view" && "Details")
            }
            width={520}
            style={{ top: "10px" }}
            onClose={() => dispatch(setDrawerVisible({ type: "", visible: false }))}
            open={isDrawerVisible.visible}
        >
            {/* {isDrawerVisible.type === "create" && <ProductForm {...props} />} */}
            {isDrawerVisible.type === "edit" && <ProductForm {...props} />}
            {/* {isDrawerVisible.type === "view" && <ViewProduct />} */}
        </Drawer>
    )
}

export default CsDrawer