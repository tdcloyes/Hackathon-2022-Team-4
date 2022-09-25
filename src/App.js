import React, { useState } from "react";

function App() {
    const [data, setData] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(['','']);

    const handleSubmit = () => {

        fetch('http://localhost:4000/api/emissions?barcode=' + data)
            .then(response => response.json())
            .then(i => setResult(i))

        console.log(result);

        setSubmitted(true);

    };

    return (
        <>
            <label>
                Barcode:
                <input type="text" name="barcode" onChange={(e) => setData(e.target.value)} />
            </label>

            <button name="submit" onClick={handleSubmit}>
                Submit
            </button>

            {
                <>
                    <p> PRODUCT: {result[0].PRODUCT} </p>
                    <p> COMPANY: {result[0].COMPANY} </p>
                    <p> EMISSIONS FOR {result[0].YEAR}: {result[0].EMSSIONS} MIL. METRIC TONS PER YEAR </p>
                    <p> EMISSION CATEGORY: {result[0].EMISSION_CATEGORY} </p>
                </>
            }
        </>
    )

}

export default App;