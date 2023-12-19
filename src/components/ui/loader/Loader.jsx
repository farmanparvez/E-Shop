import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import "./loader.scss"
const antIcon = (<LoadingOutlined style={{ fontSize: 24, }} spin />);

const Loader = () => {
    return (
        <div className='loader'>
            <Spin indicator={antIcon} />
        </div>
    )
}

export default Loader