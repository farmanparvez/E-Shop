import { InputNumber, Form, Input } from "antd";
import { setCurrent } from "../../../redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { Button } from "../../../components/ui";

const Shipping = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()

    const onFinish = async (values) => {
        dispatch(setCurrent({ current: 1, shippingAddress: values }))
    };

    return (
        <Form className="form-shipping"
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
                <Input size="large" />
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
                <Input size="large" />
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
                <InputNumber size="large" style={{width: '100%'}} />
            </Form.Item>
            <Form.Item
                name="country"
                label="Country "
                rules={[
                    {
                        required: true,
                        message: "Please input your country!",
                    },
                ]}
            >
                <Input size="large" styles={{ width: "100%" }} />
            </Form.Item>
            <Form.Item className="shipping-btn">
                <Button color="yellow" htmlType="submit">
                    Next
                </Button>
            </Form.Item>
        </Form>

    )
}

export default Shipping