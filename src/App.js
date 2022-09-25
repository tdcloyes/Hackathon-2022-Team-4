import React, { useState } from "react";

function App() {
    const [data, setData] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState([]);

    const handleSubmit = () => {

        fetch('http://localhost:4000/api/emissions?barcode=' + data)
            .then(response => response.json())
            .then(i => setResult(i))

        setSubmitted(true);
    
    };

    return (
        <>
            <label>
                Barcode: 
                <input type="text" name="barcode" onChange={(e) => setData(e.target.value)}/>
            </label>

            <button name="submit" onClick={handleSubmit}>
                Submit
            </button>

            {
                submitted && 
                <p>
                    {"PRODUCT" + result[0].PRODUCT + '\n'}
                    {"COMPANY" + result[0].COMPANY + '\n'}
                    {"EMISSIONS" + result[0].EMISSIONS + 'MIL. METRIC TONS/YEAR' + '\n'}
                    {"EMISSION CATEGORY" + result[0].'EMISSIONS CATEGORY' + '\n'}
                </p>
            }

        </>
    )

}

export default App;