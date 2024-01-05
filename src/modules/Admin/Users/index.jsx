import { getUsers } from "../../../redux/actions/userActions"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect } from "react"
import Table from "./Table/Table"


const Index = () => {
  const props = useSelector((state) => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Fragment>
      <Table {...props} />
    </Fragment>
  )
}

export default Index