import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { baseURL, clientId } from "../../utils/enviroment";
import { Row, Col } from "antd";
import { Fragment, useEffect, useState } from "react";
import { getOrderDetails } from "../../redux/actions/orderAction";
import { PayPalButton } from "react-paypal-button-v2";
import { Loader } from "../../components/ui";
import { payOrder } from "../../redux/actions/orderAction";
// import { Button } from "../../components/ui";
import "./orderStyle.scss";

const Order = () => {
    // const { isVisible, cartItems, details: { data } } = useSelector(({ cart }) => cart)
    const { orderDetails, isLoading } = useSelector(({ order }) => order)
    const [sdkReady, setSdkReady] = useState(false);
    const dispatch = useDispatch()
    const { id } = useParams()

    console.log("orderDeatail", orderDetails)

    useEffect(() => {
        dispatch(getOrderDetails(id))
    }, [id, dispatch])

    const addPayPalScript = async () => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
        script.async = true;
        script.onload = () => setSdkReady(true)
        document.body.appendChild(script);
    };

    useEffect(() => {
        if (!orderDetails?.isPaid && !window.paypal) addPayPalScript();
        // return () => dispatch(reset())
    }, [orderDetails, sdkReady]);


    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult)
        dispatch(payOrder({ orderId: id, paymentResult }));
    };

    return (
        <Fragment>
            {isLoading && <Loader />}
            {!isLoading && orderDetails && <div className="pay-order-summary">
                <div className="address-container">
                    <div>
                        <h1>Order: {id}</h1>
                    </div>
                    <div>
                        <div><h2>Shipping</h2></div>
                        <div className="pd-details">
                            <p>
                                <strong>Address:</strong>{" "}
                                {orderDetails.shippingAddress.address}, {orderDetails.shippingAddress.city}{" "}
                                {orderDetails.shippingAddress.postalCode},{" "}
                                {orderDetails.shippingAddress.country}
                            </p>
                        </div>
                        <div className={`${orderDetails?.isDelivered ? "greenbg" : "redbg"}`}>{orderDetails?.isDelivered ? "Delivered" : 'Not Deliverd'}</div>
                    </div>
                    <hr />
                    <div>
                        <div><h2>Payment</h2></div>
                        <div className="pd-details">
                            <p>
                                <strong>Method:</strong>{" "}
                                {orderDetails?.paymentMethod}
                            </p>
                        </div>
                        <div className={`${orderDetails?.isPaid ? "greenbg" : "redbg"}`}>{orderDetails?.isPaid ? "Paid" : 'Not Paid'}</div>
                    </div>
                    <hr />
                    <div>
                        <div className="order-item-heading"><h2>Order Items</h2></div>
                        <div className="order-container">
                            {orderDetails?.orderItems?.map(items =>
                                <>
                                    <div className="details" key={items?._id}>
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
                                            {items.qty} x ${items.price} = $
                                            {items.qty * items.price}
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
                        <Col span={12}>${orderDetails?.itemsPrice}</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col span={12}>Shipping</Col>
                        <Col span={12}>${orderDetails?.shippingPrice}</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col span={12}>Tax</Col>
                        <Col span={12}>${orderDetails?.taxPrice}</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col span={12}>Total</Col>
                        <Col span={12}>${orderDetails?.totalPrice}</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            {/* <Button color="yellow">Place Order</Button> */}
                            {!orderDetails?.isPaid && (
                                <PayPalButton
                                    amount={orderDetails?.totalPrice}
                                    onSuccess={successPaymentHandler}
                                />
                            )}
                        </Col>
                    </Row>
                </div>
            </div>}
        </Fragment >
    )
}

export default Order