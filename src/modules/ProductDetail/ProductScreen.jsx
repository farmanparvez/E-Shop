import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID, addCartItems } from "../../redux/actions/productAction";
import { USERDETAILS, baseURL } from "../../utils/enviroment";
import { useParams, Link } from "react-router-dom";
import { Rate, Spin, Result, Select } from "antd";
import { Button } from "../../components/ui"
import Container from "../../components/Container/Container";
import ReviewSection from "./sections/ReviewSection";
import { ShoppingCartOutlined } from '@ant-design/icons';
import "./productdetails.scss";
import { notificationHandler } from "../../redux/reducers/globalSlice";

const ProductScreen = () => {
    const props = useSelector((state) => state.product);
    const { isLoading, isError, product, isLoadingForm } = props
    const [qty, setQty] = useState(1);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    console.log(product)

    const { id } = useParams();
    const dispatch = useDispatch();

    const numbers = Array.from({ length: product.countInStock }, (_, index) => index + 1);

    useEffect(() => {
        dispatch(getProductByID(id));
    }, [dispatch, id]);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setQty(value)
    };

    const addToCartHandler = () => {
        if (!localStorage.getItem(USERDETAILS)) return dispatch(notificationHandler({ type: "info", message: "Please Login First" }))
        const val = {
            name: product.name,
            image: product.image,
            price: product.price,
            productID: product._id,
            adminID: product.user,
            userID: JSON.parse(localStorage.getItem(USERDETAILS))?._id,
            quantity: qty,
        };
        dispatch(addCartItems(val));
    };

    return (
        <Container>
            <Spin className="spinProdutDetail" spinning={isLoading}>
                {!isLoading && isError && <Result className="center-by-postion" status="500" title="500" subTitle="Sorry, something went wrong." />}
                {!isError && <div>
                    <div className="product-details-container">
                        <div className="left-box">
                            <div className="img-box">
                                <img src={baseURL + product?.image} alt="" />
                            </div>
                            <div className="flex">
                                <div>
                                    <h2 className="brand">{product?.brand}</h2>
                                    <h1 >{product?.name}</h1>
                                    <Rate className="rating" value={product.rating} />
                                    <p>
                                        {product?.description}
                                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias quo ipsum sapiente doloremque? Dignissimos repellendus doloribus aut expedita animi odit, consequatur at dolore ea praesentium aperiam maiores, facere debitis. */}
                                    </p>
                                    <h1 className="price">${product?.price}</h1>
                                    <div className="status">
                                        <div><p>Status:</p></div>
                                        <div className={`${product?.countInStock > 0 ? "inStock" : "outOfStock"}`} > <h4>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</h4></div>
                                    </div>
                                    <div className="countSelect">
                                        <Select
                                            defaultValue="1"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={handleChange}
                                            options={numbers?.map(res => ({ label: res, value: res }))}
                                        />
                                    </div>
                                    <div className="buttons">
                                        <Button style={{ width: "300px", height: "40px" }} color="yellow">Buy now</Button><br />
                                        <Button onClick={addToCartHandler} color="blue" style={{ width: "300px", height: "40px" }} loading={isLoadingForm} ><ShoppingCartOutlined style={{ fontSize: "20px", marginRight: "10px" }} /> Add to card</Button>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ReviewSection {...props} />
                    </div>
                </div>}
            </Spin>
        </Container >
    );
};

export default ProductScreen;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Row,
//   Col,
//   // Image,
//   ListGroup,
//   Card,
//   Button,
//   Form,
// } from "antd";
// import Rating from "../../components/Rating";
// import Message from "../../components/Message";
// import Loader from "../../components/Loader";
// import Meta from "../../components/Meta";
// // import Modal from "./Modal";
// import {
//   getProductByID,
//   addCartItem,
//   productReviews,
// } from "../../redux/actions/productAction";
// import Container from "../../components/Container";
// import { reset } from "../../redux/reducers/productReducer";
// import { url } from "../../utils/url";
// // import Container from "../components/Container";
// import "./productdetails.scss";

// const ProductScreen = ({ history, match }) => {
//   const [qty, setQty] = useState(1);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");

//   const dispatch = useDispatch();

//   const { isLoading, isError, isMessage,product, stateUpdated } = useSelector(
//     (state) => state.product
//   );
//  console.log(product)

//   useEffect(() => {
//     if (stateUpdated) dispatch(getProductByID(match.params.id));
//     return () => dispatch(reset());
//   }, [dispatch, stateUpdated, match.params.id]);

//   useEffect(() => {
//     dispatch(getProductByID(match.params.id));
//   }, [dispatch, match]);

//   const addToCartHandler = () => {
//     const val = {
//       name: product.name,
//       image: product.image,
//       price: product.price,
//       _id: product._id,
//       admin: product.user,
//       user: JSON.parse(localStorage.getItem("userInfo"))?._id,
//       qty,
//     };
//     // console.log(val)
//     const detail = { val, history };
//     dispatch(addCartItem(detail));
//     history.push(`/cart/${match.params.id}?qty=${qty}`);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(
//       productReviews({ id: match.params.id, data: { rating, comment } })
//     );
//   };

//   return (
//     <Container>
//       <div className="product-details-container">
//         <Link className="btn btn-light my-3" to="/">
//           Go Back
//         </Link>
//         {isLoading ? (
//           <Loader />
//         ) : isError ? (
//           <Message variant="danger">{isMessage}</Message>
//         ) : (
//           <>
//           {/* <Link to={`${url}${product.image}`} >{`http://localhost:8000/${product.image}`}</Link> <br /> */}
//           {/* <span>{window.location.href}</span> */}
//             <Meta title={product?.name} />
//             <Row>
//               <Col className="img-container" >
//                 <img 
//                   src={`${url}${product.image}`}
//                   alt={`${product?.name}`}
//                 />
//               </Col>
//               <Col >
//                 <ListGroup variant="flush">
//                   <ListGroup.Item>
//                     <h3>{product.name}</h3>
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     <Rating
//                       value={product.rating}
//                       text={`${product.numReviews} reviews`}
//                     />
//                   </ListGroup.Item>
//                   <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
//                   <ListGroup.Item>
//                     Description: {product.description}
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Col>
//               <Col>
//                 <Card>
//                   <ListGroup variant="flush">
//                     <ListGroup.Item>
//                       <Row>
//                         <Col>Price:</Col>
//                         <Col>
//                           <strong>${product.price}</strong>
//                         </Col>
//                       </Row>
//                     </ListGroup.Item>

//                     <ListGroup.Item>
//                       <Row>
//                         <Col>Status:</Col>
//                         <Col>
//                           {product.countInStock > 0
//                             ? "In Stock"
//                             : "Out Of Stock"}
//                         </Col>
//                       </Row>
//                     </ListGroup.Item>

//                     {product.countInStock > 0 && (
//                       <ListGroup.Item>
//                         <Row>
//                           <Col>Qty</Col>
//                           <Col>
//                             <Form.Control
//                               as="select"
//                               value={qty}
//                               onChange={(e) => setQty(e.target.value)}
//                             >
//                               {[...Array(product.countInStock).keys()].map(
//                                 (x) => (
//                                   <option key={x + 1} value={x + 1}>
//                                     {x + 1}
//                                   </option>
//                                 )
//                               )}
//                               {/* {[...Array(product.countInStock).keys()].map(
//                               (x) => (
//                                 <option key={x + 1} value={x + 1}>
//                                   {x + 1}
//                                 </option>
//                               )
//                             )} */}
//                             </Form.Control>
//                           </Col>
//                         </Row>
//                       </ListGroup.Item>
//                     )}

//                     <ListGroup.Item>
//                       <Button
//                         onClick={addToCartHandler}
//                         className="btn-block"
//                         type="button"
//                         disabled={product.countInStock === 0}
//                       >
//                         Add To Cart
//                       </Button>
//                     </ListGroup.Item>
//                   </ListGroup>
//                 </Card>
//               </Col>
//             </Row>
//             <Row style={{marginTop: '20px'}}>
//               <Col >
//                 <h2>Reviews</h2>
//                 {product?.reviews?.length === 0 && (
//                   <Message>No Reviews</Message>
//                 )}
//                 <ListGroup variant="flush">
//                   {product?.reviews?.map((review) => (
//                     <ListGroup.Item key={review._id}>
//                       <strong>{review.name}</strong>
//                       <Rating value={review.rating} />
//                       <p>{review.createdAt.substring(0, 10)}</p>
//                       <p>{review.comment}</p>
//                     </ListGroup.Item>
//                   ))}
//                   <ListGroup.Item>
//                     <h2>Write a Customer Review</h2>
//                     {/* {successProductReview && (
//                     <Message variant="success">
//                       Review submitted successfully
//                     </Message>
//                   )} */}
//                     {/* {loadingProductReview && <Loader />} */}
//                     {/* {errorProductReview && (
//                     <Message variant="danger">{errorProductReview}</Message>
//                   )} */}
//                     {product ? (
//                       <Form onSubmit={submitHandler}>
//                         <Form.Group controlId="rating">
//                           <Form.Label>Rating</Form.Label>
//                           <Form.Control
//                             as="select"
//                             value={rating}
//                             onChange={(e) => setRating(e.target.value)}
//                           >
//                             <option value="">Select...</option>
//                             <option value="1">1 - Poor</option>
//                             <option value="2">2 - Fair</option>
//                             <option value="3">3 - Good</option>
//                             <option value="4">4 - Very Good</option>
//                             <option value="5">5 - Excellent</option>
//                           </Form.Control>
//                         </Form.Group>
//                         <Form.Group controlId="comment">
//                           <Form.Label>Comment</Form.Label>
//                           <Form.Control
//                             as="textarea"
//                             row="3"
//                             value={comment}
//                             onChange={(e) => setComment(e.target.value)}
//                           ></Form.Control>
//                         </Form.Group>
//                         <Button
//                           // disabled={loadingProductReview}
//                           type="submit"
//                           variant="primary"
//                         >
//                           Submit
//                         </Button>
//                       </Form>
//                     ) : (
//                       <Message>
//                         Please <Link to="/login">sign in</Link> to write a
//                         review{" "}
//                       </Message>
//                     )}
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Col>
//             </Row>
//           </>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default ProductScreen;
