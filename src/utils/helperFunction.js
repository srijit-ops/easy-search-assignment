export const disablePastDate=()=> {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, "0")
    const mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
    const yy = today.getFullYear()
    return yy + "-" + mm + "-" + dd
}

export const nextTodoId=(todos)=> {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }