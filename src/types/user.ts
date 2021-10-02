
export interface UserState { //писываем интерфейс для инитиалстейт
  users: any[] //указываем типы для тайпскрипт юзерс это массив любого типа 
  loading: boolean
  error: null | string
}

// interface UserAction { //описывает типы для экшена
//   type: string
//   payload?: any
// }

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction { // описываем типы для каждого экшена
  type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: any[]
}

interface FetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
