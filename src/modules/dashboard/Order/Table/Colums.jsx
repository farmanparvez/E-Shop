import React from "react";
import { Space, Button, Tooltip, Popconfirm, Row, Col } from "antd";
import { setModalVisible, setDrawerVisible } from "../../../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  EyeTwoTone,
  EditTwoTone,
  DeleteTwoTone,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { updateOrderToDelivered } from "../../../../redux/actions/orderAction";

const Coloums = () => {
  const dispatch = useDispatch();
  const { isLoadingDelivered } = useSelector((state) => state.order);

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
      title: "Action",
      key: "action",
      // width: "400",
      align: "center",
      render: (_, record) => (
        <Row gutter={10}>
          <Col>
            <Tooltip placement="top" title={"View"}>
              <Button disabled={record.isDelivered}
                // loading={isLoadingDelivered}
                type="primary"
                onClick={() => dispatch(updateOrderToDelivered(record._id))
                }
              >
                Delivered
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
