import { Layout } from 'antd';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { ACCESSTOKEN, USERDETAILS } from '../../utils/enviroment';
import { Popover, Avatar, Badge } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from '../ui';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems } from '../../redux/actions/productAction';
import { setCartItem } from '../../redux/reducers/productReducer';
import "./header.scss"
const { Header } = Layout;

const Navber = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { cartItems } = useSelector(({ product }) => product)
    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem(USERDETAILS)) dispatch(getCartItems())
    }, [])

    const logout = () => {
        dispatch(setCartItem())
        localStorage.removeItem(USERDETAILS)
        localStorage.removeItem(ACCESSTOKEN)
        navigate("/")
    }

    const rightContent = (
        <Fragment>
            {localStorage.getItem(USERDETAILS) ?
                <Popover className='popover'
                    content={<Button type='primary' onClick={logout}> Logout</Button>}
                >
                    <Link to='/profile'>
                        <Avatar size={40} icon={<UserOutlined />} />
                    </Link>
                </Popover> :
                <Fragment>
                    <Link to="/signin">
                        <Button color={`${location.pathname === '/signin' ? "blue" : "yellow"}`}>
                            Signin
                        </Button>
                    </Link>
                    <Link to="/signup">
                        <Button color={`${location.pathname === '/signup' ? "blue" : "yellow"}`}>
                            Signup
                        </Button>
                    </Link>
                </Fragment>
            }
            <Link to="/cart" >
                <div className='cart'>
                    <Badge count={cartItems?.length}>
                        <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                    </Badge>
                    <h3>Cart</h3>
                </div>
            </Link>
        </Fragment>
    )
    return (
        <Header className='header-container'>
            <div className='header-box'>
                <Link to="/">
                    <div className='logo'>
                        TechToner
                    </div>
                </Link>
                <div className='right-section'>
                    {rightContent}
                </div>
            </div>
        </Header>
    );
};
export default Navber;