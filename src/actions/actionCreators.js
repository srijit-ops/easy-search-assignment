import { add_task, delete_task, update_status } from "./actionTypes"

export const addTask=(taskDetail)=>{
    return {
        type: add_task,
        payload:taskDetail
    }
}

export const updateStatus=(todoId)=>{
    return {
        type: update_status,
        payload:todoId
    }
}

export const deleteTask=()=>{
    return {
        type: delete_task,
        // payload:status
    }
}