import { useState, useEffect } from "react"

import {Link} from 'react-router-dom'


function PeopleListItem(props) {
  const { person } = props

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
     
      <Link to={`/view/:${person.id.value}`} state={{ person }}>See Profile</Link>
    </li>

  )
}

export default PeopleListItem
