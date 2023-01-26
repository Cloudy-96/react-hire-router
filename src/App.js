import { useState, useEffect } from "react"
import "./styles.css"

import Dashboard from "./pages/Dashboard"
import { Route, Routes } from "react-router";

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
        <Routes>
          <Route path="/ " element={<Dashboard />}/>
        </Routes>
      </header>
    </>
  )
}
