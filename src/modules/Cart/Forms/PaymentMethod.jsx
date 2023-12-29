import { Radio, Form, Button } from "antd";
import { setModalVisible } from "../../../redux/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const PaymentMethod = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const { isVisible } = useSelector(({ cart }) => cart)
    console.log(isVisible)

    const onFinish = async (values) => {
        console.log("Received values of form: ", values);
        dispatch(setModalVisible({ visible: true, type: "addressReview", data: { ...values, shippingAddress: isVisible?.shippingAddress } }))
    };

    return (
        <Form
            layout={"vertical"}
            form={form}
            name="register"
            onFinish={onFinish}
        >
            <Form.Item
                initialValue={"PayPal"}
                name="paymentMethod"
                label="Payment Method"
                rules={[
                    {
                        required: true,
                        message: 'Please pick PayPal!',
                    },
                ]}
            >
                <Radio.Group>
                    <Radio value="PayPal">PayPal</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Next
                </Button>
            </Form.Item>
        </Form>
    )
}

export default PaymentMethod