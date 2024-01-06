// import axios from "axios";
import { useDispatch } from "react-redux";
import { Form, Select, Input, Button } from "antd";

import { editUser } from "../../../../redux/actions/userActions";
const { Option } = Select;

const UserForm = ({ isDrawerVisible: { data }, isLoadingForm }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        if (data) dispatch(editUser({ values, id: data._id }));
    };

    return (
        <>
            <Form
                layout={"vertical"}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    username: data?.username,
                    email: data?.email,
                    role: data?.role,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="username"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="role"
                    label="Type"
                    rules={[
                        {
                            required: true,
                            message: "Please select type!",
                        },
                    ]}
                >
                    <Select placeholder="select your role">
                        <Option value="1287">User</Option>
                        <Option value="3497">Admin</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoadingForm}>
                        Update User
                    </Button>
                </Form.Item>
            </Form>

        </>
    );
};

export default UserForm;
