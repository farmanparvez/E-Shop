
import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import Shipping from './Forms/Shipping';
import PaymentMethod from './Forms/PaymentMethod';
import AddressReview from './Forms/AddressReview';
import { setCurrent } from '../../redux/reducers/cartSlice';
import { useSelector } from 'react-redux';
import "./checkoutStyle.scss"
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';

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
                {/* <Steps current={0}
                    items={[
                        {
                            title: 'Login',
                            status: 'finish',
                            icon: <UserOutlined />,
                        },
                        {
                            title: 'Verification',
                            status: 'finish',
                            icon: <SolutionOutlined />,
                        },
                        {
                            title: 'Pay',
                            status: 'process',
                            icon: <LoadingOutlined />,
                        },
                        {
                            title: 'Done',
                            status: 'wait',
                            icon: <SmileOutlined />,
                        },
                    ]}
                /> */}
                <Steps current={current} items={items} />
                {steps[current].content}
                {/* <div style={{ marginTop: 'auto' }}>
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => prev()}
                        >
                            Previous
                        </Button>
                    )}
                </div> */}
            </div>
        </div>
    )
}

export default CheckoutProcess

// import React, { useState } from 'react';
// import { Button, message, Steps, theme } from 'antd';
// import Shipping from '../Cart/Forms/Shipping';
// import PaymentMethod from '../Cart/Forms/PaymentMethod';
// import AddressReview from '../Cart/Forms/AddressReview';
// import { setCurrent } from '../../redux/reducers/cartSlice';
// import { useSelector } from 'react-redux';
// import "./checkoutStyle.scss"
// import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';

// const CheckoutProcess = () => {
//     const props = useSelector(({ cart }) => cart)
//     const { details: { current } } = props

//     const steps = [
//         {
//             title: 'Shipping address',
//             content: <Shipping {...props} />,
//             icon: <UserOutlined />,
//         },
//         {
//             title: 'Payment Method',
//             content: <PaymentMethod  {...props} />,
//             icon: <SolutionOutlined />,
//             subTitle: 'Left 00:00:08',
//         },
//         {
//             title: 'Order Summary',
//             content: <AddressReview  {...props} />,
//             icon: <LoadingOutlined />,
//         },
//         {
//             title: 'Order Summary',
//             content: <AddressReview  {...props} />,
//             icon: <SmileOutlined />,
//         },
//     ]

//     const items = steps.map((item) => ({
//         key: item.title,
//         title: item.title,
//     }));

//     return (
//         <div className='checkout-container'>
//             <div className='contentStyle'>
//                 <Steps current={current} items={items} />
//                 {steps[current].content}
//                 {/* <div style={{ marginTop: 'auto' }}>
//                     {current < steps.length - 1 && (
//                         <Button type="primary" onClick={() => next()}>
//                             Next
//                         </Button>
//                     )}
//                     {current === steps.length - 1 && (
//                         <Button type="primary" onClick={() => message.success('Processing complete!')}>
//                             Done
//                         </Button>
//                     )}
//                     {current > 0 && (
//                         <Button
//                             style={{
//                                 margin: '0 8px',
//                             }}
//                             onClick={() => prev()}
//                         >
//                             Previous
//                         </Button>
//                     )}
//                 </div> */}
//             </div>
//         </div>
//     )
// }

// export default CheckoutProcess