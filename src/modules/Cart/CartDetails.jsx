import { useSelector } from "react-redux"
import { baseURL } from "../../utils/enviroment"
import { Button } from "../../components/ui"
import { Select } from "antd"
import Modal from "./Modal/Modal"
import { setModalVisible } from "../../redux/reducers/cartSlice"
import { useDispatch } from "react-redux"
const { Option } = Select

const Cart = () => {
    const props = useSelector(({ cart }) => cart)
    const dispatch = useDispatch()
    const { cartItems, isVisible } = props
    console.log(cartItems)

    return (
        <div className="cart-wrapper">
            <div className="cart-container">
                <div className="left-box">
                    <div>
                        <h1>SHOPPING CART</h1>
                        {cartItems?.length === 0 && <div className="no-items">Your cart is empty Go Back</div>}
                    </div>
                    <div className="itemBox">
                        {cartItems?.length > 0 && cartItems?.map((res, index) =>
                            <div key={index} className="cartItems">
                                <div className="img-box"><img src={baseURL + res?.image} alt="" /></div>
                                <div><h3>{res?.name}</h3></div>
                                <div><h3>${res?.price}</h3></div>
                                <div>
                                    <Select
                                        defaultValue={res.quantity?.toString()}
                                        style={{
                                            width: 80,
                                        }}
                                    // onChange={handleChange}
                                    // options={numbers?.map(res => ({ label: res, value: res }))}
                                    >
                                        <Option value="1"></Option>
                                    </Select>
                                </div>
                            </div>
                        )}
                        <div className="total-checkout-container">
                            <div className="heading">
                                <h1>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} )items</h1>
                                <h3>{cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</h3>
                            </div>
                            <div className="checkout-btn">
                                <Button color="yellow" onClick={() => dispatch(setModalVisible({ type: 'shipping', visible: true }))}>
                                    PROCEED TO CHECKOUT
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isVisible?.visible && <Modal {...props} />}
        </div>
    )
}

export default Cart

{/* {cartItems?.length > 0 && cartItems?.map((res, index) =>
                    <div key={index} className="cartItems">
                        <div className="img-box"><img src={baseURL + res?.image} alt="" /></div>
                        <div><h3>{res?.name}</h3></div>
                        <div><h3>${res?.price}</h3></div>
                        <div>
                            <Select
                                defaultValue={res.quantity?.toString()}
                                style={{
                                    width: 80,
                                }}
                            // onChange={handleChange}
                            // options={numbers?.map(res => ({ label: res, value: res }))}
                            >
                                <Option value="1"></Option>
                            </Select>
                        </div>
                    </div>
                )} */}