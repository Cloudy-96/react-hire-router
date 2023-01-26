// import { useState, useEffect } from "react"

import PeopleListItem from "./PeopleListItem"

function PeopleList(props) {
  const { people } = props
  const { setPeople } = props

  console.log("people in array", people)
  
  return (
    <ul>
      {/* //check if undefined */}
      {/* if array = empty you dont have access to the array.length -->
       it's undefined so return empty string 
       */}
      {people != undefined ? people.map((person, index) => (
          <PeopleListItem key={index} person={person} />
        )) : ""}
    </ul>
  )
}

export default PeopleList
