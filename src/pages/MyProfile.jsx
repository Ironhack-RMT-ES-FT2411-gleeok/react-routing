
function MyProfile(props) {
  return (
    <div>
      
        <h3>nombre usuario: {props.data.username} </h3>
        <p>eres tú</p>

        <p>ciudad: {props.data.city}</p>

    </div>
  )
}

export default MyProfile