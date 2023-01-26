import { useState, useEffect } from "react"
import "./styles.css"

import Dashboard from "./pages/Dashboard"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <Dashboard />
          </ul>
        </nav>
      </header>
    </>
  )
}
