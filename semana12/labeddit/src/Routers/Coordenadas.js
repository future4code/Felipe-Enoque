export function goToEntrar(history){
  history.push("/Feed")
}
export function goToPost(history, id){
    history.push(`/Post/${id}`)
}
export function goToCadastrar(history){
  history.push("/cadastro")
}
export function goToLogin(history){
    history.push("/Login")
  }