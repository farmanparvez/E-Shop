// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "../../redux/actions/productAction";
// import Product from "../../components/ProductCard/Product";
// import { reset, setPagination } from "../../redux/reducers/productReducer";
// import { Link, useLocation } from "react-router-dom";
// import { Empty, Result, Spin } from "antd";
// import { Button, Pagination } from "../../components/ui";

// const LatestProduct = () => {
//   const { isLoading, isError, products, page: { page, limit }, count } = useSelector((state) => state.product);
//   const dispatch = useDispatch();
//   const { pathname } = useLocation();

//   useEffect(() => {
//     if (pathname === '/') {
//       dispatch(getProduct({ page: 1, limit: 8 }));
//     } else {
//       dispatch(getProduct({ page, limit }));
//     }
//     return () => dispatch(reset());
//   }, [dispatch, page, limit, pathname]);

//   const onChange = (pageNumber) => {
//     dispatch(setPagination({ page: pageNumber, limit: 12 }));
//   };

//   return (
//     <div className="latest-product-wrapper">
//       <div className="heading-box">
//         <h1 className="heading">Latest Product</h1>
//         <div className="border-botom"></div>
//       </div>
//       <div className="latest-product-container">
//         <div className="product-wrapper">
//           <div className="product-box">
//             {isLoading && !isError && <Spin className="center-by-postion" />}
//             {!isLoading && isError && <Result className="center-by-postion" status="500" title="500" subTitle="Sorry, something went wrong." />}
//             {!isLoading && !isError && products.length === 0 && <Empty className="center-by-postion" />}
//             {!isLoading && !isError && products?.length > 0 && products.map((product) => (
//               <Link key={product._id} to={`/product/${product._id}`}>
//                 <Product product={product} />
//               </Link>
//             ))}
//           </div>
//           <div className="right-move">
//             {pathname !== '/' && count > 12 && (<Pagination defaultCurrent={page} total={count} onChange={onChange} />)}
//             {pathname === '/' && <Link to="/latest-product"><Button color="yellow">More...</Button></Link>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestProduct;
