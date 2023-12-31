import { useEffect } from "react";
import { getMenProduct } from "../../redux/actions/userProductAction";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/ProductCard/Product";
import CustomPagination from "../../components/Pagination/Pagination";
import { setPagination, reset } from "../../redux/reducers/userProduct";
import { useLocation, Link } from "react-router-dom";
import { Button } from "../../components/ui";
import { Empty, Result, Spin } from "antd";

const MenContent = () => {
  const { isLoading, isErrorInMenProducts, menProduct, count, page: { page, limit } } =
    useSelector((state) => state.userProduct);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      dispatch(getMenProduct({ type: "male", page: 1, limit: 8 }));
    } else {
      dispatch(getMenProduct({ type: "male", page, limit }));
    }
    return () => dispatch(reset())
  }, [dispatch, page, limit, pathname]);

  const onChange = (pageNumber) => {
    // console.log("Page: ", pageNumber);
    // dispatch(getMenProduct({ type: "male", page: pageNumber, limit: 12 }));
    dispatch(setPagination({ page: pageNumber, limit: 12 }));
  };

  return (
    <div className="latest-product-wrapper">
      <div className="heading-container">
        <div>
          <h1 className="heading">Men Fashion</h1>
          <div className="border-botom"></div>
        </div>
        <div>
          {pathname === '/' && <Link to="/mens-fashion"><Button color="yellow">See more</Button></Link>}
        </div>
      </div>
      <div className="latest-product-container">
        <div className="product-wrapper">
          <div className="product-box">
            {isLoading && !isErrorInMenProducts && <Spin className="center-by-postion" />}
            {!isLoading && isErrorInMenProducts && <Result className="center-by-postion" status="500" title="500" subTitle="Sorry, something went wrong." />}
            {!isLoading && !isErrorInMenProducts && menProduct.length === 0 && <Empty className="center-by-postion" />}
            {menProduct?.map((product) => (
              <Link key={product._id} to={`/product/${product._id}`}>
                <Product product={product} />
              </Link>
            ))}
          </div>
          <div className="right-move">
            {pathname !== '/' && count > 12 && (<CustomPagination defaultCurrent={page} total={count} onChange={onChange} />)}
            {/* {pathname === '/' && <Link to="/mens-fashion"><Button color="yellow">More...</Button></Link>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenContent;
