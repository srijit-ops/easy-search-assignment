import { add_task, delete_task, filter_task, update_status } from "./actionTypes"

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

export const deleteTask=(deleteId)=>{
    return {
        type: delete_task,
        payload:deleteId
    }
}

export const filterTask=(filter)=>{
    return {
        type:filter_task,
        payload:filter
    }
}