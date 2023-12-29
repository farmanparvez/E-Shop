import { Modal } from "../../../components/ui"
import { useDispatch } from "react-redux"
import Shipping from "../Forms/Shipping"
import PaymentMethod from "../Forms/PaymentMethod"
import AddressReview from "../Forms/AddressReview"

const CsModal = (props) => {
    const { isVisible } = props
    const dispatch = useDispatch()

    return (
        <Modal
            title={
                isVisible.type === 'shipping' && "Shipping Address" ||
                isVisible.type === 'paymentMethod' && "Payment Method" ||
                isVisible.type === 'addressReview' && "Address Review"
            }
            open={isVisible.visible}
            onCancel={() => dispatch(setModalVisible({ type: "", visible: false }))}
            footer={false}
            style={{ top: "10px" }}
        >
            {isVisible.type === "shipping" && (<Shipping {...props} />)}
            {isVisible.type === "paymentMethod" && (<PaymentMethod {...props} />)}
            {isVisible.type === "addressReview" && (<AddressReview {...props} />)}
        </Modal>
    )
}

export default CsModal