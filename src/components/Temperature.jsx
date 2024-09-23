import TemperatureTable from "../components/TemperatureTable"

function Temperature({ results }) {
    return (
        <div style={{ border: "3px dotted blue", width: "500px", height: "200px", marginTop: "16px" }}>
            Temperatur Component
            <div>
                <p>City: {results?.city ?? "n/a"}</p>
            </div>
            <div>
                <p>Temperature: {results?.temperature ?? "n/a"}
                    {results?.temperature > 20 ? "☀️" : "🌧️"}</p>
            </div>
            <TemperatureTable results={results} />
        </div>)
}

export default Temperature