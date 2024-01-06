import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="wrapper">
      <div className="heading-container">
        <div className="heading-box">
          <h1 className="heading">Browse by category</h1>
          <div className="border-botom"></div>
        </div>
      </div>
      <div className="category-container">
        <div className="col">
          <Link to="/womens-fashion">
            <div className="center">
              {/* <div className="icon">
                <img src="images/girl-fashion.png" alt="" />
              </div> */}
              <h1>Ladies Fashion</h1>
            </div>
          </Link>
        </div>
        <div className="col middle-col">
          <Link to="/mens-fashion">
            <div className="center">
              {/* <div className="icon">
                <img src="images/men-fashion (2).png" alt="" />
              </div> */}
              <h1>Mens Fashion</h1>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/electronics">
            <div className="center">
              {/* <div className="icon">
                <img src="images/electronics.jpg" alt="" />
              </div> */}
              <h1>Electronics</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
