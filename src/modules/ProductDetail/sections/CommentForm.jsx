import { Rate, Form, Input } from "antd";
import { Button } from "../../../components/ui";
import { productReviews } from "../../../redux/actions/productAction";
import { useDispatch } from "react-redux";
import { reset } from "../../../redux/reducers/productReducer";
import { useEffect } from "react";
import { USERDETAILS } from "../../../utils/enviroment";
import { useNavigate } from "react-router-dom";

const CommentForm = (props) => {
    const { product, isLoadingForm, isReviewError, isMessage } = props
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            dispatch(reset())
        }, [2000])
    }, [isReviewError, dispatch])

    const onFinish = (values) => {
        if (!localStorage.getItem(USERDETAILS)) return navigate('/signin')
        dispatch(productReviews({ data: values, id: product?._id })).then(() => form.resetFields())
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
        >
            {isReviewError && <div className="errorMessage">{isMessage}</div>}
            <Form.Item name="rating" label="Rate"
                rules={[
                    {
                        required: true,
                        message: 'Please Rate!',
                    },
                ]}
            >
                <Rate defaultValue={0} style={{ fontSize: "30px" }} />
            </Form.Item>
            <Form.Item
                name="comment"
                label="Comment"
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please Input Comment!',
                    },
                ]}
            >
                <Input.TextArea rows={4} showCount placeholder="Comment" />
            </Form.Item>
            <Form.Item>
                <Button loading={isLoadingForm} color="yellow" htmltype="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CommentForm