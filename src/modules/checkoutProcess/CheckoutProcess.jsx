
import { Steps } from 'antd';
import Shipping from './Forms/Shipping';
import PaymentMethod from './Forms/PaymentMethod';
import AddressReview from './Forms/AddressReview';
import { useSelector } from 'react-redux';
import { LoadingOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import "./checkoutStyle.scss"

const CheckoutProcess = () => {
    const props = useSelector(({ cart }) => cart)
    const { details: { current } } = props

    const steps = [
        {
            title: 'Shipping',
            content: <Shipping {...props} />,
            icon: <UserOutlined />,
        },
        {
            title: 'Payment',
            content: <PaymentMethod  {...props} />,
            icon: <SolutionOutlined />,
            subTitle: 'Left 00:00:08',
        },
        {
            title: 'Order Summary',
            content: <AddressReview  {...props} />,
            icon: <LoadingOutlined />,
        },
    ]

    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <div className='checkout-container'>
            <div className='contentStyle'>
                <Steps current={current} items={items} />
                {steps[current].content}
            </div>
        </div>
    )
}

export default CheckoutProcess