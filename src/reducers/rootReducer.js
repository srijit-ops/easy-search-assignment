import { add_task, update_status, delete_task } from "../actions/actionTypes";

const initialState= {
    todos:[]
}

export const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case add_task:
            return {
                ...state,
                todos:[...state.todos, action.payload]
            }
        case update_status:
            return{
                ...state,
                todos:state.todos.map((todo)=>{
                    if(action.payload.todoId===todo.id){
                        return {...todo,completed:!todo.completed}
                    }
                    return {...todo}
                })
            }
            default: {
                return {
                  ...state
                }
              }
    }
}