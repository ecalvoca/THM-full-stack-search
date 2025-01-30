import useFetchDetails from "../hooks/useFetchDetails.tsx";


export default function CityPage() {
    const details = useFetchDetails('cities');

    return (
        <div className="App">
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <h2>{details}</h2>
                </div>
            </div>
        </div>
    );
}
