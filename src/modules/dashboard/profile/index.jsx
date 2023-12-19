import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../../redux/actions/userActions'

const Profile = () => {
  const dispatch = useDispatch()
  const props = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

  return (
    <div>Profile</div>
  )
}

export default Profile