import { Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCartItems } from '../../../redux/actions/cartActions';
import { reset } from '../../../redux/reducers/authReducer';
import { Button } from '../../../components/ui';

const SignInForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { isLoading, isSuccess } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isSuccess) dispatch(getCartItems())
        return () => dispatch(reset())
    }, [isSuccess, dispatch])

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        dispatch(login(values)).then(() => navigate("/profile"))
    };

    return (
        <Form className='form'
            layout='vertical'
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button style={{ width: "100%", marginTop:"20px" }} loading={isLoading} color="yellow" htmlType="submit">
                    Signin
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignInForm;