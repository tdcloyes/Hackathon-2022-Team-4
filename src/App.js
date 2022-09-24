import './App.css';
import { useEffect } from 'react';
import React, { useState } from "react";
import BarcodeScanner from "./BarcodeScanner.js";

function App() {

    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [emissions, setEmissions] = useState("");
    const [isScannerOpen, setIsScannerOpen] = useState(false);

    useEffect(() => {

        fetch('http://localhost:4000/api/emissions' + data)
            .then(response => response.json())
            .then(data => setEmissions());;

        console.log('text')

    }, data);

  return (
      <>
          {isScannerOpen ?
              <button onClick={() => setIsScannerOpen(false)}>{'Close Scanner'}</button> :
              <button onClick={() => setIsScannerOpen(true)}>{'Open Scanner'}</button>
          }
          {isScannerOpen &&
              <BarcodeScanner
                  onScan={(result) => {
                      setData(result.text);
                      setIsScannerOpen(false);
                  }}
                  onError={(error) => {
                      setError(error);
                      setIsScannerOpen(false);
                  }}
              />
          }
          {data && (
              <p>{`Barcode Data: ${data}`}</p>
          )}
          {error && (
              <p>{`Error ${error}`}</p>
          )}
      </>
  );
}

export default App;
