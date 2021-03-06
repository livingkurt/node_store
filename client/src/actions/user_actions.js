import axios from 'axios'
import { FETCH_USER, UPDATE_USER } from './types'


// This is an action creator
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
  return res.data
}

export const updateUser = (user) => async dispatch => {
  const res = await axios.put('/api/update/user', { user })
  console.log(res)
  dispatch({ type: UPDATE_USER, payload: res.data })
}
