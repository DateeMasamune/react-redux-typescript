import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = { //указываем тип нашего первоначального стейта
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => { // редьюсер принимает 2 параметра состояние и экшн
  switch(action.type) { // выше указываем тип через : для функции которая должна возвращать состояние
    case UserActionTypes.FETCH_USERS:
      return {loading: true, error: null, users: []}
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {loading: false, error: null, users: action.payload}
    case UserActionTypes.FETCH_USERS_ERROR:
      return {loading: false, error: action.payload, users: []}
    default:
      return state
  }
}