import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector"; //кастомный хук который исправляет проблему получения полей из стейта
import { fetchUsers } from "../store/action-creators/user";

const UserList = () => {
  const {error, loading, users} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()
  useEffect(()=>{
    fetchUsers()
  },[])

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return(
    <div>
      {users.map((user: any) =>
          <div key={user.id}>{user.name}</div>
        )}
    </div>
  )
}

export default UserList

