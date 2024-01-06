import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserInfo } from '../../../redux/actions/userActions'

const Profile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

  return (
    <div>Profile</div>
  )
}

export default Profile