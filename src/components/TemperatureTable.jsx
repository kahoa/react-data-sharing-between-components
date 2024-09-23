function TemperatureTable({ results }) {
    return (
        <ul>
            {results?.forecast?.map((entry, index) => <li
                key={index}>{entry?.date}: {entry?.temperature} {entry?.temperature > 20 ? "☀️" : "🌧️"}
            </li>)}
        </ul>

    )
}

export default TemperatureTable