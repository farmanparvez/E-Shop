import { useDispatch } from "react-redux";
import { createProduct, uploadProductImage, updateProductByID } from "../../../../redux/actions/productAction";
import { InputNumber, Form, Select, Input, Button, Upload, Spin } from "antd";
import { baseURL } from "../../../../utils/enviroment";
const { Option } = Select;

const ProductForm = ({ isDrawerVisible: { data }, isLoadingForm, isLoadingImage }) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log("Received values of form: ", values);
        const image = await Promise.resolve(values.upload[0]);
        const productData = {
            name: values.name,
            price: values.price,
            image,
            brand: values.brand,
            category: values.category,
            description: values.description,
            countInStock: values.countInStock,
            type: values.type,
        };
        if (data) {
            dispatch(updateProductByID({ productData, id: data._id }));
        } else {
            dispatch(createProduct(productData));
        }
    };

    const normFile = (e) => {
        const file = e.file.originFileObj;
        const formData = new FormData();
        formData.append("image", file);
        const res = dispatch(uploadProductImage(formData)).then((res) => res.payload)
        return [res];
    };

    return (
        <>
            {/* {data && <img style={{ width: '300px', height: '300px' }} scr={"http://localhost:8000/" + data?.image} alt='' />}
            {data && <img style={{ width: '300px', height: '300px' }} scr={"http://localhost:3000/" + data?.image} alt='' />} */}
            <Form
                layout={"vertical"}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    // image
                    name: data?.name,
                    price: data?.price,
                    upload: (data && [data?.image]) || [],
                    brand: data?.brand,
                    category: data?.category,
                    countInStock: data?.countInStock,
                    description: data?.description,
                    type: data?.type,
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    // customRequest={(res) => console.log(res)}
                    // onChange={(res) => console.log(res)}
                    getValueFromEvent={normFile}
                    // extra="longgggggggggggggggggggggggggggggggggg"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                        },
                    ]}
                >
                    <Upload
                        maxCount={1}
                        // accept="image/*"
                        customRequest={"false"}
                        // onChange={handleOnChange}
                        listType="picture-card"
                        // fileList={defaultListOfFiles}
                        className="image-upload-grid"
                    >
                        {isLoadingImage ? <Spin /> : <div>Upload Button</div>}

                        {/* {defaultListOfFiles.length >= 8 ? null : <div>Upload Button</div>} */}
                    </Upload>
                </Form.Item>
                {data && <img style={{ width: "200px", height: "200px" }} src={baseURL + data.image} />}
                <Form.Item
                    name="name"
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
                    name="price"
                    label="Price"
                    rules={[
                        {
                            required: true,
                            message: "Please input your price!",
                        },
                    ]}
                >
                    <InputNumber styles={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    name="brand"
                    label="Brand"
                    // tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: "Please input your brand!",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="countInStock"
                    label="Count In Stock "
                    rules={[
                        {
                            required: true,
                            message: "Please input your Count In Stock !",
                        },
                    ]}
                >
                    <InputNumber styles={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Category!",
                        },
                    ]}
                >
                    <Input
                        // addonBefore={prefixSelector}
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                        {
                            required: true,
                            message: "Please input description",
                        },
                    ]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>

                <Form.Item
                    name="type"
                    label="Type"
                    rules={[
                        {
                            required: true,
                            message: "Please select type!",
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="electronics">Electronics</Option>
                        <Option value="Mobile">Mobile</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoadingForm}>
                        Register
                    </Button>
                </Form.Item>
            </Form>

        </>
    );
};

export default ProductForm;
