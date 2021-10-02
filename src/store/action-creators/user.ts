import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"

export const fetchUsers = () => { //экшн получения данных с сервера
  return async (dispatch: Dispatch<UserAction>) => { //асинхронная функция которая принимает диспатч и указывает тип экшена
    try {
      dispatch({type: UserActionTypes.FETCH_USERS}) //вызываем диспатч и указываем ему тип экшена 
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data}) // вызываем диспатч при успешном выполнении запроса и указываем тип экшена
    } catch (e) {
      dispatch({ // вызываем диспатч чтобы обработать ошибки
        type: UserActionTypes.FETCH_USERS_ERROR, 
        payload: 'Произошла ошибка при загрузке пользователей'
      })
    }
  }
}