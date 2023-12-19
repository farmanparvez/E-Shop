
const ViewUser = ({ isVisible: { data } }) => {

  return (
    <div>
      <div>
        <div>
          {data.username}
        </div>
      </div>
      <div>
        <div className="my-3 p-3 rounded">
          <div>
            <p>{data.email}</p>
            <p>{text === "1287" && "User" || text === "3497" && "Admin"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
