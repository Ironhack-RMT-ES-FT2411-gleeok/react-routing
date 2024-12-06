import allUsers from "../data/users.json"

import { Link, useSearchParams } from "react-router-dom"

function AllUsers() {

  const [ searchParams, setSearchParams ] = useSearchParams();

  const handleSelectCourse = (event) => {
    console.log("selecionando curso", event.target.value)
    if (event.target.value === "") {
      setSearchParams() // elimina todos los queries del URL
    } else {
      setSearchParams({course: event.target.value})
    }
  }

  // como extraemos los queries
  const courseQuery = searchParams.get("course")
  console.log(courseQuery)

  return (
    <div>

      <label htmlFor="course">Filtra por curso</label>  
      <br />
      <select name="course" onChange={handleSelectCourse}>
        <option value="">Todos</option>
        <option value="web">Web Dev</option>
        <option value="ux">UX/UI</option>
        <option value="data">Data</option>
      </select>
      
      <h3>Estos son todos los usuarios:</h3>

      <ul>

        {allUsers
        .filter((eachUser) => {
          return courseQuery ? eachUser.course === courseQuery : true
          // if (courseQuery === null) {
          //   return true // añadelos todos
          // } else {
          //   return eachUser.course === courseQuery // añade solo los que concuerden con el query
          // }
        })
        .map((eachUser) => {
          return (
            <p key={eachUser.id}><Link to={`/profile/${eachUser.id}`}>{eachUser.username}</Link></p>
          )
        })}

      </ul>

    </div>
  )
}

export default AllUsers