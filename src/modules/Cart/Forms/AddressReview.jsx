import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { createOrder } from "../../../redux/actions/productAction";
import { Button } from "../../../components/ui";
import { useNavigate } from "react-router-dom";

const AddressReview = () => {
    const dispatch = useDispatch()
    const { isVisible, cartItems } = useSelector(({ cart }) => cart)
    const { isLoadingForm } = useSelector(({ product }) => product)
    const navigate = useNavigate()

    console.log(isVisible)
    console.log("cartItems", cartItems)
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    const itemsPrice = addDecimals(
        cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
    // console.log(itemsPrice)
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
            // orderItems: [{
            //     ...cartItems,
            //     qty: cartItems.quantity,
            //     product: cartItems._id,
            // }
            // ],
            shippingAddress: isVisible?.data?.shippingAddress,
            paymentMethod: isVisible?.data?.paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
        }

        console.log(details)
        dispatch(createOrder(details)).unwrap().then(res => navigate(`/order/${res?.order?._id}`))
    }


    return (
        <div>
            <div>
                <h2>Order Summary</h2>
            </div>
            <div>
                <Row>
                    <Col>Items</Col>
                    <Col>${itemsPrice}</Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col>Shipping</Col>
                    <Col>${shippingPrice}</Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col>Tax</Col>
                    <Col>${taxPrice}</Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col>Total</Col>
                    <Col>${totalPrice}</Col>
                </Row>
            </div>
            <div>
                <Button loading={isLoadingForm} onClick={handleOrder}>Place Order</Button>
            </div>
        </div>
    )
}

export default AddressReview