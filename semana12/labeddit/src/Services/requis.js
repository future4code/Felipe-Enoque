import axios from 'axios'

export const Login = (body) => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login`,body)
    .then((Response)=> console.log(Response))
    .catch((error) => console.log(error))

}
