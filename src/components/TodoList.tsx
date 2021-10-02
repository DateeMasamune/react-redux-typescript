import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const {error, loading, limit, page, todos} = useTypedSelector(state => state.todo)
  const {fetchTodos, setTodoPage} = useActions()
  const pages = [1,2,3,4,5]

  useEffect(()=>{
    fetchTodos(page,limit)
  },[page])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map((todo: any) => 
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      )}
      <div 
      style={{display: "flex"}}> 
        {pages.map((p: any)=>
          <div 
          style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
          onClick={()=>setTodoPage(p)}
          >
            {p}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoList