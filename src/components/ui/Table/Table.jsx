import { Table } from "antd";
import "./table.scss"

const CustomTable = (props) => {
  return <div className="customTable"><Table {...props} /></div>
};

export default CustomTable;
