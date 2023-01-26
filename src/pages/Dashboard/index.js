import { useState, useEffect } from "react"
import PeopleList from "./components/PeopleList"

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  useEffect(() => {
    // if (people.state)
    console.log("made fetchrequest")
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((peopleData) => {
        //doesnt update during the useEffect. so need to console.log peopleData.results
        setPeople(peopleData.results)
        console.log(peopleData.results)
      })
  }, [])
  

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList setPeople={setPeople} people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
