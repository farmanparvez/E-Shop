import { useEffect } from "react";
import { getElectronicsProduct } from "../../redux/actions/userProductAction";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/ProductCard/Product";
import CustomPagination from "../../components/Pagination/Pagination";
import { setPagination, reset } from "../../redux/reducers/userProduct";
import { useLocation, Link } from "react-router-dom";
import { Empty, Result, Spin } from "antd";

const ElectronicsContent = () => {
  const { isLoading, isErrorInElectronicProducts, electronicsProduct, count, page: { page, limit } } = useSelector(
    (state) => state.userProduct
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      dispatch(getElectronicsProduct({ type: "electronics", page: 1, limit: 8 }));
    } else {
      dispatch(getElectronicsProduct({ type: "electronics", page, limit }));
    }
    return () => dispatch(reset())
  }, [dispatch, page, limit, pathname]);

  const onChange = (pageNumber) => dispatch(setPagination({ page: pageNumber, limit: 12 }));

  return (
    <div className="latest-product-wrapper">
      <div className="heading-container">
        <div className="heading-box">
          <h1 className="heading">Electronis Fashion</h1>
          <div className="border-botom"></div>
        </div>
        <div>
          {pathname === '/' && <Link to="/electronics">
            <p className="see-more-link">
              See more
              <div className="see-more-link-underline" />
            </p>
          </Link>}
        </div>
      </div>
      <div className="latest-product-container">
        <div className="product-wrapper">
          <div className="product-box">
            {isLoading && !isErrorInElectronicProducts && <Spin className="center-by-postion" />}
            {!isLoading && isErrorInElectronicProducts && <Result className="center-by-postion" status="500" title="500" subTitle="Sorry, something went wrong." />}
            {!isLoading && !isErrorInElectronicProducts && electronicsProduct.length === 0 && <Empty className="center-by-postion" />}
            {!isLoading && !isErrorInElectronicProducts && electronicsProduct?.length > 0 && electronicsProduct?.map((product) => (
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

export default ElectronicsContent;
