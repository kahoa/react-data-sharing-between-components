import { useState } from "react"

// Locality of Behaviour -> https://htmx.org/essays/locality-of-behaviour/

function Search({ setResults }) {
    const [search, setSearch] = useState("")

    async function handleSearch(event) {
        event.preventDefault()
        const result = await fetch(`https://freetestapi.com/api/v1/weathers?search=${search.toLowerCase()}`)
        const data = await result.json()
        const firstResult = data[0]
        setResults(firstResult)
    }

    return (
        <form style={{ border: "3px dotted green", width: "500px", height: "100px" }}
        >
            <label htmlFor="city">Stadt</label>
            <input value={search} onChange={e => setSearch(e.target.value)} name="city" type="text" placeholder="Gebe hier die Stadt ein..." />
            <button onClick={handleSearch}>Suchen</button>
        </form>
    )
}

export default Search