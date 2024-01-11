import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../redux/actions/productAction";
import Product from "../../../../components/ProductCard/Product";
import { reset } from "../../../../redux/reducers/productReducer";
import { Link, useLocation } from "react-router-dom";
import { Empty, Result, Spin } from "antd";
import Slider from "react-slick";

const LatestProduct = () => {
    const { isLoading, isError, products, page: { page, limit } } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        // dispatch(getProduct({ page, limit }));
        if (pathname === '/') {
            dispatch(getProduct({ page: 1, limit: 8 }));
        } else {
            dispatch(getProduct({ page, limit }));
        }
        return () => dispatch(reset());
    }, [dispatch, page, limit, pathname]);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1430,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1160,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="slider-container">
            <div className="heading-container">
                <div>
                    <h1 className="heading">Latest Fashion</h1>
                    <div className="border-botom"></div>
                </div>
            </div>
            <div className="slider-cs">
                {isLoading && !isError && <Spin className="center-by-postion" />}
                {!isLoading && isError && <Result className="center-by-postion" status="500" title="500" subTitle="Sorry, something went wrong." />}
                {!isLoading && !isError && products.length === 0 && <Empty className="center-by-postion" />}
                {!isLoading && !isError && products?.length > 0 && <Slider {...settings}>
                    {products.map((product) => (
                        <Link key={product._id} to={`/product/${product._id}`} className="latest-product-link">
                            <Product product={product} />
                        </Link>
                    ))}
                </Slider>}
            </div >
        </div >
    );
};

export default LatestProduct;