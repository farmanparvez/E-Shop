import { getOrders } from "../../../redux/actions/orderAction"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect } from "react"
import Table from "./Table/Table"


const index = () => {
  const props = useSelector((state) => state.order);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch])

  return (
    <Fragment>
      <Table {...props} />
    </Fragment>
  )
}

export default index