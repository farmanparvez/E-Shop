import { notification } from "antd";

export const openNotificationWithIcon = (type, descriptiond) => {
  console.log(type)
    notification[type]({
      message: type === 'success' ? 'Success' : 'Failed',
      description: descriptiond,
    });
  };