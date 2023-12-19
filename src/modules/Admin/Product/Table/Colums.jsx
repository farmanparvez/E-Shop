import React from "react";
import { Space, Button, Tooltip, Popconfirm, Row, Col } from "antd";
import { setModalVisible, setDrawerVisible } from "../../../../redux/reducers/productReducer";
import { useDispatch } from "react-redux";
import {
  EyeTwoTone,
  EditTwoTone,
  DeleteTwoTone,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { deleteProductByID } from "../../../../redux/actions/productAction";

const Coloums = () => {
  const dispatch = useDispatch();

  const data = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "PRICE",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "CATEGORY",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "BRAND",
      dataIndex: "brand",
      key: "brand",
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
              <Button
                type="primary"
                icon={<EyeTwoTone />}
                onClick={() =>
                  dispatch(
                    setModalVisible({
                      type: "view",
                      visible: true,
                      data: record,
                    })
                  )
                }
              />
            </Tooltip>
          </Col>
          <Col>
            <Tooltip placement="top" title={"Edit"}>
              <Button
                icon={<EditTwoTone />}
                onClick={() =>
                  dispatch(
                    setDrawerVisible({
                      type: "edit",
                      visible: true,
                      data: record,
                    })
                  )
                }
              />
            </Tooltip>
          </Col>
          <Col>
            <Popconfirm
              title="Are you sure？"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              }
              onConfirm={() => dispatch(deleteProductByID(record._id))}
              onCancel={'cancel'}
              okText="Yes"
              cancelText="No"
            >
              <Button
                type="primary"
                icon={<DeleteTwoTone />}
                danger
              // onClick={() => dispatch(deleteProductByID(record._id))}
              />
            </Popconfirm>
          </Col>
        </Row>
      ),
    },
  ];

  return data;
};

export default Coloums;
