import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { createOrder } from "../../../redux/actions/productAction";
import { Button } from "../../../components/ui";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseURL } from "../../../utils/enviroment";

const AddressReview = () => {
    const dispatch = useDispatch()
    const { cartItems, details: { data } } = useSelector(({ cart }) => cart)
    const { isLoadingForm } = useSelector(({ product }) => product)
    const navigate = useNavigate()

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    const itemsPrice = addDecimals(
        cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );

    const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);
    const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));
    const totalPrice = (
        Number(itemsPrice) +
        Number(shippingPrice) +
        Number(taxPrice)
    ).toFixed(2);


    const handleOrder = () => {
        const details = {
            orderItems: cartItems?.map(res => ({
                qty: res.quantity,
                product: res._id,
                ...res
            })),
            shippingAddress: data?.shippingAddress,
            paymentMethod: data?.paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
        }
        console.log(details);
        dispatch(createOrder(details)).unwrap().then(res => navigate(`/order/${res?.order?._id}`))
    }


    return (
        <div>
            <div className="order-summary">
                <div className="address-container">
                    {/* <div>
                        <h1>Order Summary</h1>
                    </div> */}
                    <div>
                        <div><h2>Shipping</h2></div>
                        <div className="pd-details">
                            <p>
                                <strong>Address:</strong>{" "}
                                {data.shippingAddress.address}, {data.shippingAddress.city}{" "}
                                {data.shippingAddress.postalCode},{" "}
                                {data.shippingAddress.country}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div><h2>Payment</h2></div>
                        <div className="pd-details">
                            <p>
                                <strong>Method:</strong>{" "}
                                {data.paymentMethod}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="order-item-heading"><h2>Order Items</h2></div>
                        <div className="order-container">
                            {cartItems?.map(items =>
                                <>
                                    <div className="details">
                                        <div className="img-box">
                                            <img
                                                src={baseURL + items.image}
                                                alt={items.name}
                                            />
                                        </div>
                                        <Col>
                                            <Link to={`/product/${items.productID}`}>
                                                {items.name}
                                            </Link>
                                        </Col>
                                        <Col md={4}>
                                            {items.quantity} x ${items.price} = $
                                            {items.quantity * items.price}
                                        </Col>
                                    </div>
                                    <hr />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="order-price">
                    <h1>Order Summary</h1>
                    <hr />
                    <Row>
                        <Col span={12}>Items</Col>
                        <Col span={12}>${itemsPrice}</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col span={12}>Shipping</Col>
                        <Col span={12}>${shippingPrice}</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col span={12}>Tax</Col>
                        <Col span={12}>${taxPrice}</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col span={12}>Total</Col>
                        <Col span={12}>${totalPrice}</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col span={12}>
                            <Button color="yellow" loading={isLoadingForm} onClick={handleOrder}>Place Order</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default AddressReview