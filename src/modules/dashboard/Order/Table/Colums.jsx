import { Button, Tooltip, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const Coloums = () => {
  const navigate = useNavigate();

  const data = [
    {
      title: "Delivered",
      dataIndex: "isDelivered",
      key: "isDelivered",
      render: (text) => <span>{text ? "Success" : 'Pending'}{console.log(text)}</span>,
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
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Row gutter={10}>
          <Col>
            <Tooltip placement="top" title={"View"}>
              <Button
                type="primary"
                onClick={() => navigate(`/order/${record._id}`)
                }
              >
                Details
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
