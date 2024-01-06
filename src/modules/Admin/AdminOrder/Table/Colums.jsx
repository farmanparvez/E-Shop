import { Button, Tooltip, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { updateOrderToDelivered } from "../../../../redux/actions/orderAction";

const Coloums = () => {
  const dispatch = useDispatch();

  const data = [
    {
      title: "Delivered",
      dataIndex: "isDelivered",
      key: "isDelivered",
      render: (text) => <span>{text ? "Success" : 'Pending'}</span>,
    },
    {
      title: "Paid",
      dataIndex: "isPaid",
      key: "isPaid",
      render: (text) => <span>{text ? "Success" : 'Pending'}</span>,
    },
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "PRICE",
      dataIndex: "itemsPrice",
      key: "itemsPrice",
    },
    {
      title: "Shipping Price",
      dataIndex: "shippingPrice",
      key: "shippingPrice",
    },
    {
      title: "Tax Price",
      dataIndex: "taxPrice",
      key: "taxPrice",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Delivery",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Row gutter={10}>
          <Col>
            <Tooltip placement="top" title={"View"}>
              <Button disabled={record.isDelivered}
                type="primary"
                onClick={() => dispatch(updateOrderToDelivered(record._id))
                }
              >
                Mark as Delivered
              </Button>
            </Tooltip>
          </Col>
        </Row>
      ),
    },
  ];

  return data;
};

export default Coloums;
