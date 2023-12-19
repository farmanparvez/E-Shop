import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openNotificationWithIcon } from "../../utils/notification";
import { reset } from "../../redux/reducers/globalSlice";
import { useNavigate } from "react-router-dom";
import { ACCESSTOKEN, USERDETAILS } from "../../utils/enviroment";

const Notification = () => {
  const { isNotification, notificationDetails } = useSelector(({ global }) => global)
  const { type, message } = notificationDetails
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let timer
    timer = setTimeout(() => {
      if (isNotification) {
        openNotificationWithIcon(type, message)
        if (message === 'jwt expired') {
          navigate("/signin")
          localStorage.removeItem(USERDETAILS)
          localStorage.removeItem(ACCESSTOKEN)
        }
        dispatch(reset())
      }
    }, 700)
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [isNotification, navigate])
  return
};

export default Notification;
