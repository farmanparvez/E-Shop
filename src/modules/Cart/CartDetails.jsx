import { useSelector } from "react-redux"
import { baseURL } from "../../utils/enviroment"
import { Button } from "../../components/ui"
import { Select } from "antd"
const { Option } = Select

const Cart = () => {
    const { cartItems } = useSelector(({ product }) => product)
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
                                <h1>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)} )items</h1>
                                <h3>{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h3>
                            </div>
                            <div className="checkout-btn">
                                <Button color="yellow">
                                    PROCEED TO CHECKOUT
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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