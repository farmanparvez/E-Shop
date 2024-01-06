import { Rate, Empty } from "antd";
import CommentForm from "./CommentForm";

const ReviewSection = (props) => {
    const { product } = props
    
    return (
        <div className='review-container'>
            <div>
                <h1>WRITE A CUSTOMER REVIEW</h1>
            </div>
            <div className="box-container">
                <div className="left-box">
                    <CommentForm {...props} />
                </div>
                <div className="right-box">
                    <h1>REVIEWS</h1>
                    {product?.reviews?.length === 0 && <Empty description="No Review Found" />}
                    {product?.reviews?.length > 0 && product?.reviews?.map(res =>
                        <div className="review-wrapper" key={res?._id}>
                            <div className="review-box">
                                <div>
                                    <h3>{res?.name}</h3>
                                    <p>{res?.updatedAt}</p>
                                </div>
                                <div>
                                    <Rate
                                        style={{ fontSize: "15px" }}
                                        disabled
                                        value={res?.rating}
                                    />
                                </div>
                            </div>
                            <div>
                                <p>
                                    {res?.comment}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReviewSection