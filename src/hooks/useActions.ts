import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
// import * as UserActionCreators from '../store/action-creators/user' //импортируем все экшны для того чтобы объединить в один
import  ActionCreators from '../store/action-creators/index'

export const useActions = () => {
  const dispatch = useDispatch()
  console.log(ActionCreators)
  return bindActionCreators(ActionCreators, dispatch)
}