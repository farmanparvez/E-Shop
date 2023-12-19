import { getAdminProductProductByID } from "../../../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect } from "react"
import Table from "./Table/Table"


const index = () => {
  const props = useSelector((state) => state.product);
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAdminProductProductByID())
  }, [dispatch])

  return (
    <Fragment>
      <Table {...props} />
    </Fragment>
  )
}

export default index