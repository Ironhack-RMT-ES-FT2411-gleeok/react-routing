import { useParams } from "react-router-dom"
// useParams es el hook que me permite acceder a los parametros dinamicos

import allUsers from "../data/users.json"

function Perfil() {

  const parametrosDinamicos = useParams()
  console.log(parametrosDinamicos)

  // buscar un usuario por su nombre dentro del array de allUsers

  const foundUser = allUsers.find((eachUser) => {
    return eachUser.username === parametrosDinamicos.nombreDeUsuario
  })
  console.log(foundUser)

  return (
    <div>
      
      <h1>Perfil de un usuario</h1>

      <h4>nombre: {foundUser.username}</h4>
      <p>ciudad: {foundUser.city}</p>
      <p>curso: {foundUser.course}</p>
      <p>id: {foundUser.id}</p>

    </div>
  )
}

export default Perfil