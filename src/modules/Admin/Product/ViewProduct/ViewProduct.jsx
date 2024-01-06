import { Link } from "react-router-dom";
import { baseURL } from "../../../../utils/enviroment";

const ViewProduct = ({ isVisible: { data } }) => {

  return (
    <div>
      <div>
        <div>
          {data.name}
        </div>
      </div>
      <div>
        <div className="my-3 p-3 rounded">
          {/* <Card.Title>
            <strong>{data.name}</strong>
          </Card.Title> */}
          <Link to={`/data/${data._id}`}>
            {/* <img src={data.image} alt="Girl in a jacket" width="500" height="600"></img> */}
            <img
              style={{ width: "200px", height: "200px" }}
              src={baseURL + data.image}
            />
            {/* <Card.Img src={"http://localhost:8000/" + data.image} variant='top' /> */}
          </Link>

          <div>
            <Link to={`/data/${data._id}`}>
              <p>
                <strong>{data.name}</strong>
              </p>
            </Link>

            <p>
              {/* <Rating
              value={data.rating}
              text={`${data.numReviews} reviews`}
            /> */}
            </p>

            <p>{data.price}</p>
            <p>{data.brand}</p>
            <p>{data.category}</p>
            <p>{data.description}</p>
            <p>{data.countInStock}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
