export const disablePastDate=()=> {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, "0")
    const mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
    const yy = today.getFullYear()
    return yy + "-" + mm + "-" + dd
}