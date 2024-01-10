import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "../../redux/actions/productAction";
import { USERDETAILS, baseURL } from "../../utils/enviroment";
import { useParams } from "react-router-dom";
import { Rate, Spin, Result, Select } from "antd";
import { Button } from "../../components/ui"
import Container from "../../components/Container/Container";
import ReviewSection from "./sections/ReviewSection";
import { ShoppingCartOutlined } from '@ant-design/icons';
import "./productdetails.scss";
import { notificationHandler } from "../../redux/reducers/globalSlice";
import { addCartItems } from "../../redux/actions/cartActions";

const ProductScreen = () => {
    const props = useSelector((state) => state.product);
    const { isLoading, isError, product, isLoadingForm } = props
    const [qty, setQty] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    const numbers = Array.from({ length: product.countInStock }, (_, index) => index + 1);

    useEffect(() => {
        dispatch(getProductByID(id));
    }, [dispatch, id]);

    const handleChange = (value) => {
        setQty(value)
    };

    const addToCartHandler = () => {
        if (!localStorage.getItem(USERDETAILS)) return dispatch(notificationHandler({ type: "info", message: "Please Login First" }))
        const val = {
            name: product.name,
            image: product.image,
            price: product.price,
            productID: product._id,
            adminID: product.user,
            userID: JSON.parse(localStorage.getItem(USERDETAILS))?._id,
            quantity: qty,
        };
        dispatch(addCartItems(val));
    };

    return (
        <Container>
            <Spin className="spinProdutDetail" spinning={isLoading}>
                {!isLoading && isError && <Result className="center-by-postion" status="500" title="500" subTitle="Sorry, something went wrong." />}
                {!isError && <div>
                    <div className="product-details-container">
                        <div className="left-box">
                            <div className="img-box">
                                <img src={baseURL + product?.image} alt="" />
                            </div>
                            <div className="flex">
                                <div>
                                    <h2 className="brand">{product?.brand}</h2>
                                    <h1 >{product?.name}</h1>
                                    <Rate className="rating" value={product.rating} />
                                    <p>
                                        {product?.description}
                                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias quo ipsum sapiente doloremque? Dignissimos repellendus doloribus aut expedita animi odit, consequatur at dolore ea praesentium aperiam maiores, facere debitis. */}
                                    </p>
                                    <h1 className="price">${product?.price}</h1>
                                    <div className="status">
                                        <div><p>Status:</p></div>
                                        <div className={`${product?.countInStock > 0 ? "inStock" : "outOfStock"}`} > <h4>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</h4></div>
                                    </div>
                                    <div className="countSelect">
                                        <Select
                                            defaultValue="1"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={handleChange}
                                            options={numbers?.map(res => ({ label: res, value: res }))}
                                        />
                                    </div>
                                    <div className="buttons">
                                        <Button style={{ width: "300px", height: "40px" }} color="yellow">Buy now</Button><br />
                                        <Button onClick={addToCartHandler} color="blue" style={{ width: "300px", height: "40px" }} loading={isLoadingForm} ><ShoppingCartOutlined style={{ fontSize: "20px", marginRight: "10px" }} /> Add to card</Button>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ReviewSection {...props} />
                    </div>
                </div>}
            </Spin>
        </Container >
    );
};

export default ProductScreen;
