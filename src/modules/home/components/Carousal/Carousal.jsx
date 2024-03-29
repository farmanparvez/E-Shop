import { Fragment, useEffect } from "react";
import { Carousel, Spin, Result, Empty } from "antd";
import { topratingproducts } from "../../../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../../../redux/reducers/productReducer";
import { Link } from "react-router-dom";
import { baseURL } from "../../../../utils/enviroment";
import { Button } from "../../../../components/ui"
import "./carousal.scss";

const Carousal = () => {
  const { isLoading, topRatedProducts, isTopRatingProductsError } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topratingproducts());
    return () => dispatch(reset());
  }, [dispatch]);

  return (
    <div className="size">
      {isLoading && !isTopRatingProductsError && <Spin className="center-by-postion" />}
      {!isLoading && isTopRatingProductsError && <Result className="center-by-postion" status="500" title="500" subTitle="Sorry, something went wrong." />}
      {!isLoading && !isTopRatingProductsError && topRatedProducts.length === 0 && <Empty className="center-by-postion" />}
      {!isLoading && !isTopRatingProductsError && topRatedProducts.length > 0 && (
        <div className="carousel-container">
          <Carousel autoplay dots={false}>
            {topRatedProducts?.map((product) => (
              <Fragment key={product?._id}>
                <div  className="contentStyle" >
                  <div className="content-box">
                    <div className="content">
                      <h1>{product.brand}</h1>
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                      <Link to={`/product/${product._id}`}>
                        <Button color="yellow">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="image-container">
                    <img className="cur-img" src={baseURL + product.image} alt="" />
                  </div>
                </div>
              </Fragment>
            ))}
          </Carousel>
        </div>
      )
      }
    </div >
  );
};

export default Carousal;
