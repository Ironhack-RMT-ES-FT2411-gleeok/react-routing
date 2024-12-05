import allUsers from "../data/users.json"

import { Link } from "react-router-dom"

function AllUsers() {

  return (
    <div>
      
      <h3>Estos son todos los usuarios:</h3>

      <ul>

        {allUsers.map((eachUser) => {
          return (
            <p key={eachUser.id}><Link to={`/profile/${eachUser.username}`}>{eachUser.username}</Link></p>
          )
        })}

      </ul>

    </div>
  )
}

export default AllUsers