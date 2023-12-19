import { Result } from "antd";

const UnAuthorised = () => {
  return (
    <div className="flex">
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
      />
    </div>
  );
};

export default UnAuthorised;
