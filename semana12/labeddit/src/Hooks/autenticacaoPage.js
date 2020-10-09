import { useLayoutEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { goToEntrar, goToLogin } from "../Routers/Coordenadas"

export const LimpaTo = (history) => {

      localStorage.clear()
      goToLogin(history)
}

export const Autentica = () => {

    let history = useHistory()

    useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if(!token){
      goToLogin(history)
    }

}, [history])

}

export const AutenticaLogin = () => {

    let history = useHistory()
    
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
          goToEntrar(history)
        }
    
    }, [history])
    
}