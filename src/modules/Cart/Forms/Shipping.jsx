import { InputNumber, Form, Input, Button } from "antd";
import { setModalVisible } from "../../../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";

const Shipping = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        console.log("Received values of form: ", values);
        dispatch(setModalVisible({ visible: true, type: "paymentMethod", shippingAddress: values }))
    };

    return (
        <Form
            layout={"vertical"}
            form={form}
            name="register"
            onFinish={onFinish}
        >
            <Form.Item
                name="address"
                label="Address"
                rules={[
                    {
                        required: true,
                        message: "Please input your address!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="city"
                label="City"
                rules={[
                    {
                        required: true,
                        message: "Please input your city!",
                    },
                ]}
            >
                <Input styles={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
                name="postalCode"
                label="Postal Code"
                // tooltip="What do you want others to call you?"
                rules={[
                    {
                        required: true,
                        message: "Please input your postal code!",
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name="country"
                label="country "
                rules={[
                    {
                        required: true,
                        message: "Please input your country!",
                    },
                ]}
            >
                <Input styles={{ width: "100%" }} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Next
                </Button>
            </Form.Item>
        </Form>

    )
}

export default Shipping