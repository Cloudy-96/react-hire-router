import { useState, useEffect } from "react"
import "./styles.css"
import { Route, Routes, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
//TODO: open ticket to help debug
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard
            </Link>
            </li>
          </ul>
        </nav>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard
            hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
        
        {/* From A */}
        <Route path="/profile/:username/" element={<PersonProfile hiredPeople={hiredPeople} setHiredPeople={setHiredPeople} />} />
        </Routes>
    </>
  )
}
