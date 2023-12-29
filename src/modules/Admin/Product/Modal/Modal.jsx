import { Modal } from "../../../../components/ui"
import ViewModal from "../ViewProduct/ViewProduct";
import { useDispatch } from "react-redux";
import { setModalVisible } from "../../../../redux/reducers/productReducer";

const CsModal = (props) => {
    const { isVisible } = props
    const dispatch = useDispatch()

    return (
        <Modal
            title={
                isVisible.type === 'view' && "Details"
            }
            open={isVisible.visible}
            onCancel={() => dispatch(setModalVisible({ type: "", visible: false }))}
            footer={false}
            style={{ top: "10px" }}
        >
            {isVisible.type === "view" && (<ViewModal {...props} />)}
        </Modal>
    )
}

export default CsModal