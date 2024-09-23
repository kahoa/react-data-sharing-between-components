import Search from "./components/Search"
import Temperature from "./components/Temperature"
import { useState, useEffect } from "react"
// folgende components brauchen wir:
// ein input field für die city
// ein button für das absenden
// ein darstellung der temperatur + ein icon
function App() {
  const [results, setResults] = useState({})

  return (
    <div >
      <Search
        setResults={setResults}
        search={search}
        setSearch={setSearch} />
      <Temperature results={results} />
    </div>
  )
}

export default App
