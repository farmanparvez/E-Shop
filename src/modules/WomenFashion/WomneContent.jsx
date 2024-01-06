import { useEffect } from "react";
import { getWomenProduct } from "../../redux/actions/userProductAction";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/ProductCard/Product";
import { useLocation, Link } from "react-router-dom";
import { setPagination, reset } from "../../redux/reducers/userProduct";
import CustomPagination from "../../components/Pagination/Pagination";
import { Empty, Result, Spin } from "antd";
import { Button } from "../../components/ui";

const WomneContent = () => {
  const { isLoading, isErrorInWomenProducts, womenProduct, page: { page, limit }, count } = useSelector(
    (state) => state.userProduct
  );
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    if (pathname === '/') {
      dispatch(getWomenProduct({ type: "female", page: 1, limit: 8 }));
    } else {
      dispatch(getWomenProduct({ type: "female", page, limit }));
    }
    return () => dispatch(reset())
  }, [dispatch, pathname, page, limit]);

  const onChange = (pageNumber) => {
    // dispatch(getMenProduct({ type: "male", page: pageNumber, limit: 12 }));
    dispatch(setPagination({ page: pageNumber, limit: 12 }));
  };


  return (
    <div className="latest-product-wrapper">
      <div className="heading-container">
        <div className="heading-box">
          <h1 className="heading">Women Fashion</h1>
          <div className="border-botom"></div>
        </div>
        <div>
          {pathname === '/' && <Link to="/womens-fashion"><Button color="yellow" >See more</Button></Link>}
        </div>
      </div>
      <div className="latest-product-container">
        <div className="product-wrapper">
          <div className="product-box">
            {isLoading && !isErrorInWomenProducts && <Spin className="center-by-postion" />}
            {!isLoading && isErrorInWomenProducts && <Result className="center-by-postion" status="500" title="500" subTitle="Sorry, something went wrong." />}
            {!isLoading && !isErrorInWomenProducts && womenProduct.length === 0 && <Empty className="center-by-postion" />}
            {womenProduct?.map((product) => (
              <Link key={product._id} to={`/product/${product._id}`}>
                <Product product={product} />
              </Link>
            ))}
          </div>
          <div className="right-move">
            {pathname !== '/' && count > 12 && (<CustomPagination defaultCurrent={page} total={count} onChange={onChange} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomneContent;
