import { Radio, Form, Row, Col } from "antd";
import { setModalVisible, setCurrent } from "../../../redux/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/ui";
import { Fragment } from "react";

const PaymentMethod = (props) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const { isVisible, details: { shippingAddress } } = props
    console.log(isVisible)

    const onFinish = async (values) => {
        console.log("Received values of form: ", values);
        // dispatch(setModalVisible({ visible: true, type: "addressReview", data: { ...values, shippingAddress: isVisible?.shippingAddress } }))
        dispatch(setCurrent({ current: 2, data: { ...values, shippingAddress } }))
    };

    return (
        <Fragment>
            <Form className="form-payMethod"
                layout={"vertical"}
                form={form}
                name="register"
                onFinish={onFinish}
            >
                <h1>Payment Method</h1>
                <Form.Item
                    initialValue={"PayPal"}
                    name="paymentMethod"
                    // label="Payment Method"
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
                <Row className="payMethod-btn" justify="space-between" align='middle'>
                    <Col>
                        <Form.Item>
                            <Button color="blue" onClick={() => dispatch(setCurrent({ current: 0, data: {} }))}>
                                Back
                            </Button>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item>
                            <Button color="yellow" htmlType="submit">
                                Next
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Fragment>
    )
}

export default PaymentMethod