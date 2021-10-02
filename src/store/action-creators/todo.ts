import axios from "axios"
import { Dispatch } from "redux"
import { TodoAction, TodoActionTypes } from "../../types/todo"

export const fetchTodos = (page = 1, limit = 10) => { //экшн получения данных с сервера
  return async (dispatch: Dispatch<TodoAction>) => { //асинхронная функция которая принимает диспатч и указывает тип экшена
    try {
      dispatch({type: TodoActionTypes.FETCH_TODOS}) //вызываем диспатч и указываем ему тип экшена 
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
        params: {_page: page, _limit: limit}
      })
      dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data}) // вызываем диспатч при успешном выполнении запроса и указываем тип экшена
    } catch (e) {
      dispatch({ // вызываем диспатч чтобы обработать ошибки
        type: TodoActionTypes.FETCH_TODOS_ERROR, 
        payload: 'Произошла ошибка при загрузке списка дел'
      })
    }
  }
}

export function setTodoPage(page: number): TodoAction {
  return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}